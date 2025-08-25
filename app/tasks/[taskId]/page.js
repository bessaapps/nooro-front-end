import EditForm from "@/components/EditForm";

export default async function EditTaskPage({ params }) {
  const { taskId } = await params;

  return (
    <>
      <EditForm taskId={taskId} />
    </>
  );
}
