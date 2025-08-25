"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Plus from "@/assets/images/icons/plus.svg";
import { useTask } from "@/context/TasksContext";

export default function ActionButton({ type }) {
  const { isFetchingTasks } = useTask();

  return (
    <Button
      type={type}
      bg={"primary.500"}
      w={"100%"}
      borderRadius={8}
      isLoading={isFetchingTasks}
    >
      <Flex align={"center"} justify={"center"} gap={2}>
        <Text fontSize={14}>Create Task</Text>
        <Image src={Plus} alt={"Add Symbol"} />
      </Flex>
    </Button>
  );
}
