import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { WeeklyPlan } from "@/weekly-plan.type";
import Link from "next/link";

type PlanGridProps = {
  data: WeeklyPlan;
};

export default function PlanGrid({ data }: PlanGridProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {Object.entries(data).map(([day, { summary }], i) => (
        <BentoGridItem
          key={i}
          title={
            <Link href={`/days/${day}`} passHref>
              <p className="capitalize">{day}</p>
            </Link>
          }
          description={summary}
          header={
            <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
