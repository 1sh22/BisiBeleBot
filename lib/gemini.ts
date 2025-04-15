import { GoogleGenerativeAI } from "@google/generative-ai";

export type UserPreferences = {
  spiceLevel: string;
  mainIngredient: string;
  mealType: string;
  cookingTime: string;
};

export async function generateRecipe(preferences: UserPreferences): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Generate a vegetarian Karnataka recipe based on these preferences:
    - Spice Level: ${preferences.spiceLevel}
    - Main Ingredient: ${preferences.mainIngredient}
    - Type of Meal: ${preferences.mealType}
    - Cooking Time: ${preferences.cookingTime}

    Please provide a recipe that is:
    1. Vegetarian
    2. Authentic to Karnataka cuisine
    3. Easy to follow
    4. Formatted with clear steps
    5. Written in simple language

    Format the response as:
    - Recipe Name:
    - Preparation Time:
    - Cooking Time:
    - Servings:
    - Ingredients:
    - Instructions (step by step):
    `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating recipe:', error);
    throw new Error('Failed to generate recipe. Please try again.');
  }
}