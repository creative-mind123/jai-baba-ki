
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

if (!process.env.GOOGLE_SHEET_ID) {
  throw new Error('GOOGLE_SHEET_ID is not defined');
}
if (!process.env.GOOGLE_SHEET_NAME) {
    throw new Error('GOOGLE_SHEET_NAME is not defined');
}
if (!process.env.GOOGLE_CREDENTIALS) {
  throw new Error('GOOGLE_CREDENTIALS is not defined');
}
if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('GOOGLE_PRIVATE_KEY is not defined');
}


const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

let credentials;
try {
    credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
} catch (error) {
    console.error("Failed to parse GOOGLE_CREDENTIALS:", error);
    throw new Error("GOOGLE_CREDENTIALS in .env file is not valid JSON. Please ensure it is copied correctly and there are no extra characters.");
}

// Re-insert the private key, ensuring newlines are correctly formatted.
credentials.private_key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

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
