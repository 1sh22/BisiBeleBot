import { NextResponse } from 'next/server';
import { generateRecipe } from '@/lib/gemini';
import type { UserPreferences } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const preferences: UserPreferences = await request.json();
    const recipe = await generateRecipe(preferences);
    return NextResponse.json({ recipe });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recipe' },
      { status: 500 }
    );
  }
}