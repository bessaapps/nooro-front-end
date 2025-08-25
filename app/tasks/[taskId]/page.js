import EditForm from "@/components/EditForm";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default async function EditTaskPage({ params }) {
  const { taskId } = await params;

  return (
    <>
      <Link href={"../"}>
        <Text mb={4}>Go Back</Text>
      </Link>
      <EditForm taskId={taskId} />
    </>
  );
}
