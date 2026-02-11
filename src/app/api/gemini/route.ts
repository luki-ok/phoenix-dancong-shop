import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const apiKey =
    process.env.GOOGLE_API_KEY?.trim() ||
    process.env.google_api_key?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GOOGLE_API_KEY" },
      { status: 500 },
    );
  }

  let response: Response;
  try {
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Gemini request failed",
        details: error instanceof Error ? error.message : "Request error",
      },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: "Gemini request failed", details: errorText },
      { status: response.status },
    );
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };

  const text =
    data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("") ??
    "";

  return NextResponse.json({ text });
}
