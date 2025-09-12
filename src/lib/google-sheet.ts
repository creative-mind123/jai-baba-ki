
'use server';

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function appendToSheet(row: any[]) {
  const requiredEnvVars = ['GOOGLE_SHEET_ID', 'GOOGLE_SHEET_NAME', 'GCP_SERVICE_ACCOUNT_JSON'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    const errorMessage = `The following environment variables are missing on the server: ${missingVars.join(', ')}. Please set them in your hosting provider's settings.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

  try {
    // Parse the credentials from the environment variable directly
    const credentials = JSON.parse(process.env.GCP_SERVICE_ACCOUNT_JSON!);

    // Authenticate directly with the credentials object in memory
    const auth = new GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw new Error('Could not append data to Google Sheet. Check service account permissions and environment variables.');
  }
}
