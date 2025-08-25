"use client";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Box,
  Button,
  Flex,
  Progress,
  Stack,
  Text
} from "@chakra-ui/react";
import { useTask } from "@/context/TasksContext";
import Checkbox from "@/assets/images/checkbox.svg";
import CompletedCheckbox from "@/assets/images/completed-checkbox.svg";
import Trash from "@/assets/images/icons/trash.svg";
import Image from "next/image";
import { deleteTaskAPI, updateTaskAPI } from "@/utils/api";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Tasks() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(undefined);
  const cancelRef = useRef();
  const { tasks, setTasks, isFetchingTasks, setIsFetchingTasks } = useTask();

  const toggleTask = (id, completed) => {
    if (!id || completed === undefined) return;
    setIsFetchingTasks(true);

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
      .catch((error) => console.error(error))
      .finally(() => setIsFetchingTasks(false));
  };

  const destroyTask = () => {
    if (!activeTaskId) return;
    setIsFetchingTasks(true);

    deleteTaskAPI(activeTaskId)
      .then(() =>
        setTasks((prev) => prev?.filter((item) => item?.id !== activeTaskId))
      )
      .catch((error) => console.error(error))
      .finally(() => {
        setIsConfirming(false);
        setIsFetchingTasks(false);
      });
  };

  return (
    <>
      <Stack>
        <Flex justify={"space-between"} mb={2}>
          <Flex gap={4}>
            <Text color={"primary.400"} fontSize={14} fontWeight={700}>
              Tasks
            </Text>
            <Badge borderRadius={"full"} py={"2px"} px={2}>
              {tasks?.length}
            </Badge>
          </Flex>
          <Flex gap={4}>
            <Text color={"secondary.400"} fontSize={14} fontWeight={700}>
              Completed
            </Text>
            <Badge
              borderRadius={"full"}
              py={"2px"}
              px={2}
              style={{ textTransform: "lowercase" }}
            >
              {tasks?.filter((task) => task?.completed)?.length} of{" "}
              {tasks?.length}
            </Badge>
          </Flex>
        </Flex>
        {isFetchingTasks ? (
          <Progress size="xs" isIndeterminate />
        ) : (
          <Box h={"4px"} />
        )}
        {tasks?.map(({ id, title, color, completed }) => (
          <Flex
            key={id}
            align={"center"}
            gap={4}
            bg={"gray.800"}
            w={"100%"}
            borderWidth={"1px"}
            borderColor={"gray.700"}
            borderRadius={8}
            p={4}
          >
            <Box
              minW={"18px"}
              cursor={"pointer"}
              onClick={() => toggleTask(id, !completed)}
            >
              <Image
                src={completed ? CompletedCheckbox : Checkbox}
                alt={completed ? "Completed Checkbox" : "Checkbox"}
              />
            </Box>
            <Link href={`/tasks/${id}`}>
              <Text
                as={completed ? "strike" : undefined}
                color={color}
                fontSize={14}
              >
                {title}
              </Text>
            </Link>
            <Box
              minW={"14px"}
              cursor={"pointer"}
              ml={"auto"}
              onClick={() => {
                setActiveTaskId(id);
                setIsConfirming(true);
              }}
            >
              <Image src={Trash} alt={"Trash Can"} />
            </Box>
          </Flex>
        ))}
      </Stack>
      <AlertDialog
        isOpen={isConfirming}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsConfirming(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Task</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsConfirming(false)}>
                Cancel
              </Button>
              <Button colorScheme={"red"} onClick={destroyTask} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
