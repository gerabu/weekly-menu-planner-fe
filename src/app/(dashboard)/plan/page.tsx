"use client";

import { generate } from "@/actions";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { useActionState } from "react";
import IngredientsForm from "./_components/ingredients-form";

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
        {state.data && (
          <BentoGrid className="max-w-4xl mx-auto">
            {Object.entries(state.data).map(([day, { summary }], i) => (
              <BentoGridItem
                key={i}
                title={<p className="capitalize">{day}</p>}
                description={summary}
                header={
                  <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
                }
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        )}
      </div>
    </div>
  );
}
