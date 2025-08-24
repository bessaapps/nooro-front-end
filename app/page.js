import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Plus from "@/assets/images/icons/plus.svg";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
    <>
      <Button bg={"primary.500"} w={"100%"} mb={16}>
        <Flex align={"center"} justify={"center"} gap={2}>
          Create Task
          <Image src={Plus} alt={"Add Symbol"} />
        </Flex>
      </Button>
      <Tasks />
    </>
  );
}
