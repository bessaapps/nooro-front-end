"use client";

import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";
import Checkbox from "@/assets/images/checkbox.svg";
import CompletedCheckbox from "@/assets/images/completed-checkbox.svg";
import Trash from "@/assets/images/icons/trash.svg";
import Image from "next/image";
import { deleteTaskAPI, updateTaskAPI } from "@/utils/api";

export default function Tasks() {
  const { tasks, setTasks } = useTask();

  const toggleTask = (id, completed) => {
    const updateData = { id, completed };

    updateTaskAPI(updateData)
      .then(() =>
        setTasks((prev) =>
          setTasks(
            prev?.map((item) =>
              item?.id === id ? { ...item, ...updateData } : item
            )
          )
        )
      )
      .catch((error) => console.error(error));
  };

  const destroyTask = (id) => {
    deleteTaskAPI(id)
      .then(() => setTasks((prev) => prev?.filter((item) => item?.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <Stack>
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
      {tasks?.map(({ id, title, completed }) => (
        <Flex key={id} align={"center"} justify={"space-between"}>
          <Flex align={"center"} gap={4}>
            <Box onClick={() => toggleTask(id, !completed)}>
              <Image
                src={completed ? CompletedCheckbox : Checkbox}
                alt={completed ? "Completed Checkbox" : "Checkbox"}
              />
            </Box>
            <Text as={completed ? "strike" : undefined}>{title}</Text>
          </Flex>
          <Box onClick={() => destroyTask(id)}>
            <Image src={Trash} alt={"Trash Can"} />
          </Box>
        </Flex>
      ))}
    </Stack>
  );
}
