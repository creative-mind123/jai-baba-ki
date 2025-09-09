
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// Ensure all required environment variables are defined.
if (!process.env.GOOGLE_SHEET_ID) throw new Error('GOOGLE_SHEET_ID is not defined');
if (!process.env.GOOGLE_SHEET_NAME) throw new Error('GOOGLE_SHEET_NAME is not defined');
if (!process.env.GOOGLE_PROJECT_ID) throw new Error('GOOGLE_PROJECT_ID is not defined');
if (!process.env.GOOGLE_PRIVATE_KEY) throw new Error('GOOGLE_PRIVATE_KEY is not defined');
if (!process.env.GOOGLE_CLIENT_EMAIL) throw new Error('GOOGLE_CLIENT_EMAIL is not defined');


const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

// Construct the credentials object from individual environment variables.
const credentials = {
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Important: Format the private key correctly
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
};

const auth = new GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(row: any[]) {
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
    throw new Error('Could not append data to Google Sheet.');
  }
}
