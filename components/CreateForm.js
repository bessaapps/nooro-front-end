"use client";

import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";
import { useState } from "react";
import ActionButton from "@/components/ActionButton";
import { createTaskAPI } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const { setTasks } = useTask();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;

    const insertData = { title, color };

    createTaskAPI(insertData)
      .then(() => {
        setTasks((prev) => [insertData, ...prev]);
        router.push("/tasks");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={2}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormControl>
        <ActionButton type={"submit"} />
      </Stack>
    </form>
  );
}
