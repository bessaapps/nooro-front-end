"use client";

import { Badge, Flex, Text } from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";

export default function Tasks() {
  const { tasks } = useTask();

  return (
    <>
      <Flex justify={"space-between"}>
        <Flex gap={4}>
          <Text colorScheme={"primary"}>Tasks</Text>
          <Badge>{tasks?.length}</Badge>
        </Flex>
        <Flex gap={4}>
          <Text>Completed</Text>
          <Badge>{tasks?.filter((task) => task?.completed)?.length}</Badge>
        </Flex>
      </Flex>
    </>
  );
}
