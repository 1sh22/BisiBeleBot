"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import type { UserPreferences } from '@/lib/gemini';

interface QuestionFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading: boolean;
}

export default function QuestionForm({ onSubmit, isLoading }: QuestionFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    spiceLevel: '',
    mainIngredient: '',
    mealType: '',
    cookingTime: '',
  });

  const questions = [
    {
      id: 'spiceLevel',
      question: 'What spice level do you prefer?',
      options: ['Mild', 'Medium', 'Spicy', 'Extra Spicy'],
    },
    {
      id: 'mainIngredient',
      question: 'Choose your main ingredient:',
      options: ['Rice', 'Lentils', 'Vegetables', 'Mixed'],
    },
    {
      id: 'mealType',
      question: 'What type of meal are you looking for?',
      options: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    },
    {
      id: 'cookingTime',
      question: 'How much time do you have for cooking?',
      options: ['30 minutes', '1 hour', '1.5 hours', '2+ hours'],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onSubmit(answers);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <Card className="p-6 w-full max-w-xl mx-auto bg-[#f9f4ef] shadow-lg rounded-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#ea580c]">
            {currentQ.question}
          </h2>
          <div className="flex justify-center mb-4">
            <div className="flex gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded ${
                    index === currentQuestion ? 'bg-[#ea580c]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <RadioGroup
          value={answers[currentQ.id as keyof UserPreferences]}
          onValueChange={handleAnswer}
          className="space-y-4"
        >
          {currentQ.options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="text-[#374151]">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleNext}
          disabled={!answers[currentQ.id as keyof UserPreferences] || isLoading}
          className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white"
        >
          {currentQuestion === questions.length - 1 ? (
            isLoading ? 'Generating Recipe...' : 'Get Recipe'
          ) : (
            'Next Question'
          )}
        </Button>
      </div>
    </Card>
  );
}