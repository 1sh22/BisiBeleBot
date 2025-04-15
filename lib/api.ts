import { GoogleGenAI } from "@google/genai";

export const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Environment variable NEXT_PUBLIC_GEMINI_API_KEY is not defined.');
  throw new Error('Gemini API key is not defined in the environment variables.');
}

console.log('GEMINI_API_KEY:', GEMINI_API_KEY); // Temporary log for debugging

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateContent(prompt: string) {
  try {
    console.log(`Generating content with prompt: ${prompt}`);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Use the correct model
      contents: prompt,
    });

    // Ensure the response is formatted with HTML for bold text and structured points
    if (!response.text) {
      throw new Error('The response text is undefined.');
    }

    const formattedResponse = response.text
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Convert **bold** to <b>bold</b>
      .replace(/^\s*[-*]\s+/gm, '• ') // Replace bullet points with "•"
      .replace(/^\s*\d+\.\s+/gm, '<br />$&') // Ensure numbered points are preserved
      .replace(/\n/g, '<br />'); // Convert newlines to <br /> for HTML rendering

    console.log('API Response Data:', formattedResponse);
    return formattedResponse;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('An error occurred while generating content with the Gemini API.');
  }
}
