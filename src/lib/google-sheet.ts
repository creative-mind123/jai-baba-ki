
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

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;

// Safely parse the credentials
let credentialsString = process.env.GOOGLE_CREDENTIALS;
let CREDENTIALS;
try {
    CREDENTIALS = JSON.parse(credentialsString);
} catch (error) {
    // If parsing fails, try to remove potential surrounding quotes and re-parse.
    // This can happen if the .env value is wrapped in single or double quotes.
    if (credentialsString.startsWith("'") && credentialsString.endsWith("'")) {
        credentialsString = credentialsString.substring(1, credentialsString.length - 1);
    }
    try {
        CREDENTIALS = JSON.parse(credentialsString);
    } catch (e) {
        console.error("Failed to parse GOOGLE_CREDENTIALS:", e);
        throw new Error("GOOGLE_CREDENTIALS in .env file is not valid JSON.");
    }
}


const auth = new GoogleAuth({
  credentials: {
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  },
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
