
'use server';

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function appendToSheet(row: any[]) {
  console.log('--- Starting appendToSheet ---');

  const requiredEnvVars = ['GCP_SERVICE_ACCOUNT_JSON', 'GOOGLE_SHEET_ID', 'GOOGLE_SHEET_NAME'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    const errorMessage = `The following environment variables are missing on the server: ${missingVars.join(', ')}.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  console.log('All required environment variables are present.');

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;
  const SERVICE_ACCOUNT_JSON_STRING = process.env.GCP_SERVICE_ACCOUNT_JSON!;

  try {
    console.log('Attempting to parse credentials...');
    const credentials = JSON.parse(SERVICE_ACCOUNT_JSON_STRING);
    console.log('Credentials parsed successfully.');

    // ** THIS IS THE FIX: Reformat the private key **
    const formattedPrivateKey = credentials.private_key.replace(/\\n/g, '\n');

    console.log('Attempting to create GoogleAuth client...');
    const auth = new GoogleAuth({
        credentials: {
            client_email: credentials.client_email,
            private_key: formattedPrivateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        projectId: credentials.project_id,
    });
    console.log('GoogleAuth client created.');

    console.log('Attempting to create Google Sheets API client...');
    const sheets = google.sheets({ version: 'v4', auth });
    console.log('Google Sheets API client created.');
    
    const request = {
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    };

    console.log('Attempting to append data to sheet...');
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Data appended successfully. Response:', response.status);

    return response.data;
  } catch (error) {
    console.error('--- CRITICAL ERROR in appendToSheet ---');
    if (error instanceof Error) {
        console.error('Error Message:', error.message);
        console.error('Error Stack:', error.stack);
    } else {
        console.error('Unknown Error Type:', error);
    }
    // Re-throw the error to be caught by the server action
    throw error;
  }
}
