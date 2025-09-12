
'use server';

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

// Define the path for the service account key file
const KEY_FILE_PATH = path.join(process.cwd(), 'src', 'app', 'lib', 'server', 'gcp-service-account.json');

async function writeKeyFile() {
  // In a production environment (like Vercel), the JSON key is stored in an env var.
  if (process.env.GCP_SERVICE_ACCOUNT_JSON && !fs.existsSync(KEY_FILE_PATH)) {
    // Ensure the directory exists
    const dir = path.dirname(KEY_FILE_PATH);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    // Write the key from the environment variable to the file
    fs.writeFileSync(KEY_FILE_PATH, process.env.GCP_SERVICE_ACCOUNT_JSON);
  }
}

export async function appendToSheet(row: any[]) {
  await writeKeyFile();
  
  const requiredEnvVars = ['GOOGLE_SHEET_ID', 'GOOGLE_SHEET_NAME'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    const errorMessage = `The following environment variables are missing on the server: ${missingVars.join(', ')}. Please set them in your hosting provider's settings.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  
  if (!fs.existsSync(KEY_FILE_PATH)) {
     const errorMessage = `Google Cloud Platform service account key file is missing at ${KEY_FILE_PATH}. Also ensure the GCP_SERVICE_ACCOUNT_JSON environment variable is set on your hosting provider.`;
     console.error(errorMessage);
     throw new Error(errorMessage);
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

  try {
    const auth = new GoogleAuth({
        keyFile: KEY_FILE_PATH,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`, // Appends after the last row in the sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw new Error('Could not append data to Google Sheet. Ensure the service account has Editor access to the sheet and the environment variables are correct.');
  }
}
