"use client";

import { useState } from 'react';
import QuestionForm from '@/components/QuestionForm';
import Layout from '@/components/Layout';
import { generateContent } from '@/lib/api';

export default function QuestionFormPage() {
  const [recipe, setRecipe] = useState<string | null>(null); // State to store the generated recipe
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleFormSubmit = async (preferences: any) => {
    console.log('User Preferences:', preferences);
    setIsLoading(true);
    setRecipe(null);

    try {
      const prompt = `Generate a recipe inspired by Karnataka's rich cuisine based on the following preferences: 
        Spice Level: ${preferences.spiceLevel}, 
        Main Ingredient: ${preferences.mainIngredient}, 
        Meal Type: ${preferences.mealType}, 
        Cooking Time: ${preferences.cookingTime}.
        The recipe must be short, easy to understand, and written in a structured format using either bullet points or numbers. 
        Use bold for the heading and for important steps or words in the instructions.`;

      const generatedRecipe = await generateContent(prompt);
      console.log('Generated Recipe:', generatedRecipe);
      setRecipe(generatedRecipe); // Update the state with the generated recipe
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Ayyo! Failed to generate content with the Gemini API. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-8 w-full max-w-3xl mx-auto">
        <QuestionForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        {isLoading && (
          <div className="text-center text-[#ea580c] font-bold">
            Swalpa wait maadi... Nimma recipe ready aagtha ide! 😋
          </div>
        )}
        {recipe && (
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-[#ea580c] mb-4">Your Recipe</h2>
            <div
              className="text-[#4b5563] whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: recipe }}
            />
            <p className="mt-4 text-[#ea580c] italic">
              "Nimma adige super aagide! Try maadi, enjoy maadi!" 😄
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
