import * as z from "zod";

export const formSchema = z.object({
  ingredients: z.string().min(1, "Add at least one ingredient"),
});

export type FormValues = z.infer<typeof formSchema>;
