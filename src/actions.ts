"use server";

import { formSchema } from "@/schema";
import { type WeeklyPlan } from "./weekly-plan.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generate(_prevState: any, formData: FormData) {
  const validatedInput = formSchema.safeParse({
    ingredients: String(formData.get("ingredients")),
  });

  if (!validatedInput.success) {
    return {
      errors: validatedInput.error.flatten().fieldErrors,
    };
  }

  const response: WeeklyPlan = await (
    await fetch("http://localhost:8000/weekly-plan/generate", {
      method: "POST",
      body: JSON.stringify({
        ingredients: validatedInput.data.ingredients.split(", "),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

  return {
    data: response,
  };
}
