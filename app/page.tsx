"use client";
import Donation from "../components/donation";
import Form from "../components/form";
import Name from "../components/name";
import { Container, Stack } from "@mantine/core";

export default function Home() {
  
 
  return (
    <Container size="sm" mt={"sm"}>
      <Stack spacing={"xl"}>
        <Name />
        <Form />
        <Donation />
      </Stack>
    </Container>
  );
}
