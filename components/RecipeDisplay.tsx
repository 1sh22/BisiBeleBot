import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UtensilsCrossed } from 'lucide-react';

interface RecipeDisplayProps {
  recipe: string;
}

export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  const formattedRecipe = recipe.split('\n').map((line, index) => {
    if (line.startsWith('- ')) {
      return <li key={index} className="ml-4">{line.substring(2)}</li>;
    }
    if (line.startsWith('Recipe Name:')) {
      return <h2 key={index} className="text-2xl font-bold mb-4">{line.substring(12)}</h2>;
    }
    if (line.includes(':')) {
      const [title, content] = line.split(':');
      return (
        <div key={index} className="mb-2">
          <strong>{title}:</strong>{content}
        </div>
      );
    }
    return <p key={index} className="mb-2">{line}</p>;
  });

  return (
    <Card className="p-6 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <UtensilsCrossed className="h-8 w-8 text-primary" />
      </div>
      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-4">
          {formattedRecipe}
        </div>
      </ScrollArea>
    </Card>
  );
}