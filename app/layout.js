import { Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Providers } from "@/app/providers";
import { TasksProvider } from "@/context/TasksContext";
import TasksLoader from "@/components/loaders/TasksLoader";

export const metadata = {
  title: "Nooro Todo App"
};

export default function RootLayout({ children }) {
  return (
    <TasksProvider>
      <TasksLoader />
      <html lang={"en"}>
        <body>
          <Providers>
            <header>
              <Center bg={"gray.900"} h={200}>
                <Image src={Logo} alt={"Todo App"} />
              </Center>
            </header>
            <main>
              <Container maxW={"container.md"}>{children}</Container>
            </main>
          </Providers>
        </body>
      </html>
    </TasksProvider>
  );
}
