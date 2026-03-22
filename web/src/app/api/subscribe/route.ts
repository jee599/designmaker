import { google } from "googleapis";
import { NextRequest } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const encoded = process.env.GOOGLE_CREDENTIALS;
  if (!encoded) throw new Error("GOOGLE_CREDENTIALS not set");

  const credentials = JSON.parse(Buffer.from(encoded, "base64").toString());

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: SCOPES,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    // debug: test read first
    const testRead = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
    console.log("Sheet title:", testRead.data.properties?.title);

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "waitlist!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, new Date().toISOString(), source || "generate"]],
      },
    });

    return Response.json({ success: true });
  } catch (err: unknown) {
    const gaxiosErr = err as { message?: string; code?: number; errors?: unknown[] };
    const detail = {
      message: gaxiosErr.message,
      code: gaxiosErr.code,
      errors: gaxiosErr.errors,
      hasCredentials: !!process.env.GOOGLE_CREDENTIALS,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      sheetIdPrefix: process.env.GOOGLE_SHEET_ID?.slice(0, 8),
      sheetIdLength: process.env.GOOGLE_SHEET_ID?.length,
      credentialsLength: process.env.GOOGLE_CREDENTIALS?.length,
    };
    console.error("Subscribe error:", JSON.stringify(detail));
    return Response.json({ error: detail }, { status: 500 });
  }
}
