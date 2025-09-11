
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function appendToSheet(row: any[]) {
  // Check for required environment variables at runtime
  const requiredEnvVars = [
    'GOOGLE_SHEET_ID',
    'GOOGLE_SHEET_NAME',
    'GOOGLE_PROJECT_ID',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_CLIENT_EMAIL',
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    const errorMessage = `The following environment variables are missing on the server: ${missingVars.join(', ')}. Please set them in your hosting provider's settings to connect to Google Sheets.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

  // Construct the credentials object from individual environment variables.
  const credentials = {
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  };

  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
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
    throw new Error('Could not append data to Google Sheet. Check if the sheet is shared with the client_email.');
  }
}
