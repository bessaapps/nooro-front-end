import Tasks from "@/components/Tasks";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";

export default function TasksPage() {
  return (
    <>
      <Link href={"/tasks/create"}>
        <ActionButton />
      </Link>
      <Tasks />
    </>
  );
}
