export type WeeklyPlan = {
  [day: string]: {
    breakfast: {
      name: string;
      ingredients: string;
      instructions: string;
    };
    lunch: {
      name: string;
      ingredients: string;
      instructions: string;
    };
    dinner: {
      name: string;
      ingredients: string;
      instructions: string;
    };
    summary: string;
  };
};
