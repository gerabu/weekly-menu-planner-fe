type DayPageProps = {
  params: Promise<{ day: string }>;
};

export default async function DayPage({ params }: DayPageProps) {
  const day = (await params).day;

  return <div>{day}</div>;
}
