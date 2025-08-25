"use client";

import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";
import { useState } from "react";
import ActionButton from "@/components/ActionButton";
import { createTaskAPI } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const { setTasks, setIsFetchingTasks } = useTask();
  const router = useRouter();

  const colors = [
    "#FF3B30",
    "#FF9500",
    "#FFCC00",
    "#34C759",
    "#007AFF",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#A2845E"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    setIsFetchingTasks(true);

    const insertData = { title, color };

    createTaskAPI(insertData)
      .then((response) => {
        setTasks((prev) => [{ id: response?.data, ...insertData }, ...prev]);
        router.push("/tasks");
      })
      .catch((error) => console.error(error))
      .finally(() => setIsFetchingTasks(false));
  };

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
      <ActionButton type={"submit"} />
    </form>
  );
}
