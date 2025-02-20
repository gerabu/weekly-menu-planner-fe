import { X } from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type IngredientsFormProps = {
  formAction: (payload: FormData) => void;
  isPending: boolean;
  errors?: {
    ingredients?: string[] | undefined;
  };
};

export default function IngredientsForm({
  formAction,
  isPending,
  errors,
}: IngredientsFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addIngredient = () => {
    if (inputValue.trim()) {
      setIngredients((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  return (
    <form action={formAction} className="w-1/3 mx-auto space-y-4">
      <div className="rounded-md focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 space-y-2">
        <Label htmlFor="add-ingredient">What is in your fridge?</Label>
        <div className="flex gap-x-2">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Type an ingredient and press Enter"
            className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            id="add-ingredient"
          />
          <Input
            name="ingredients"
            value={ingredients}
            hidden
            className="hidden"
            readOnly
          />
          <Button type="button" onClick={addIngredient} className="shrink-0">
            Add
          </Button>
        </div>
        {ingredients.length > 0 && (
          <div className="p-2 flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {ingredient}
                <button
                  type="button"
                  onClick={() => removeIngredient(ingredient)}
                  className="ml-1 hover:text-destructive"
                >
                  <X size={14} />
                </button>
              </Badge>
            ))}
          </div>
        )}
        {errors?.ingredients && (
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.ingredients}
          </p>
        )}
      </div>
      <div className="w-full flex justify-center">
        <Button type="submit" disabled={isPending} size="lg">
          {isPending ? "Generating..." : "Generate"}
        </Button>
      </div>
    </form>
  );
}
