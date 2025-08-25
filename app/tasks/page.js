import Tasks from "@/components/Tasks";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";
import { Box, Stack } from "@chakra-ui/react";

export default function TasksPage() {
  return (
    <Stack gap={8}>
      <Box style={{ transform: "translateY(-20px)" }}>
        <Link href={"/tasks/create"}>
          <ActionButton />
        </Link>
      </Box>
      <Tasks />
    </Stack>
  );
}
