"use client";

import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";
import { useEffect, useState } from "react";
import ActionButton from "@/components/ActionButton";
import { updateTaskAPI } from "@/utils/api";
import { useRouter } from "next/navigation";
import { colors } from "@/utils/constants";

export default function EditForm({ taskId }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const { tasks, setTasks, setIsFetchingTasks } = useTask();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    setIsFetchingTasks(true);

    const updateData = { title, color };

    updateTaskAPI({ id: taskId, ...updateData })
      .then(() => {
        setTasks((prev) =>
          prev?.map((task) =>
            task?.id === parseInt(taskId) ? { ...task, ...updateData } : task
          )
        );
        router.push("/tasks");
      })
      .catch((error) => console.error(error))
      .finally(() => setIsFetchingTasks(false));
  };

  useEffect(() => {
    const activeTask = tasks?.find((task) => task?.id === parseInt(taskId));

    setTitle(activeTask?.title || "");
    setColor(activeTask?.color || "");
  }, [tasks, taskId]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb={4}>
        <FormLabel color={"primary.400"} fontSize={14} fontWeight={700}>
          Title
        </FormLabel>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormControl>
      <FormControl mb={10}>
        <FormLabel color={"primary.400"} fontSize={14} fontWeight={700}>
          Color
        </FormLabel>
        <Flex justifyContent="space-between">
          {colors?.map((item) => (
            <Box
              key={item}
              bg={item}
              h={"52px"}
              w={"52px"}
              borderRadius={"full"}
              cursor={"pointer"}
              borderWidth={item === color ? 3 : undefined}
              borderColor={item === color ? "white" : undefined}
              onClick={() => setColor(item)}
            />
          ))}
        </Flex>
      </FormControl>
      <ActionButton type={"submit"} anchor={"Save"} />
    </form>
  );
}
