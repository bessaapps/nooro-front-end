import Tasks from "@/components/Tasks";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";

export default function TasksIndex() {
  return (
    <>
      <Link href={"/tasks/create"}>
        <ActionButton />
      </Link>
      <Tasks />
    </>
  );
}
