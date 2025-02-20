"use client";

import { useActionState } from "react";

import { generate } from "@/actions";
import IngredientsForm from "./_components/ingredients-form";
import PlanGrid from "./_components/plan-grid";

export default function PlanPage() {
  const [state, formAction, isPending] = useActionState(generate, {
    errors: undefined,
    data: {},
  });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <IngredientsForm
        formAction={formAction}
        isPending={isPending}
        errors={state.errors}
      />
      <div className="min-h-[100vh] flex-1 md:min-h-min">
        {state.data && <PlanGrid data={state.data} />}
      </div>
    </div>
  );
}
