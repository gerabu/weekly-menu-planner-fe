import Modal from "./modal";

type DayModalProps = {
  params: Promise<{ day: string }>;
};

export default async function DayModal({ params }: DayModalProps) {
  const day = (await params).day;

  return <Modal>{day}</Modal>;
}
