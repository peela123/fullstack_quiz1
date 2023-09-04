// import { API_URL } from "../utils/api";
// import { type Donation } from "@/utils/types";
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import dayjs from "dayjs";

export default function Donation() {
  return (
    <Card withBorder shadow="xs" bg="#5c7cfa">
      <Group mb={20}>
        <Title order={1} color="gray">
          Total
        </Title>
        <Title order={1} variant="gradient">
          10000
        </Title>
        <Title order={1} color="gray">
          THB
        </Title>
      </Group>
      <Stack>
        <Paper shadow="xs" p="md">
          <Group>
            <Text>Tom</Text>
            <Text>Sawyer</Text>
            <Text>tom_sawyer@gmail.com</Text>
            <Text>10000</Text>
            <Text>{dayjs("2023-08-26 06:17:51").format("D-MMM HH:mm:ss")}</Text>
          </Group>
        </Paper>
        <Paper shadow="xs" p="md">
          <Group>
            <Text>Tom</Text>
            <Text>Sawyer</Text>
            <Text>tom_sawyer@gmail.com</Text>
            <Text>10000</Text>
            <Text>{dayjs("2023-08-26 06:17:51").format("D-MMM HH:mm:ss")}</Text>
          </Group>
        </Paper>
        <Paper shadow="xs" p="md">
          <Group>
            <Text>Tom</Text>
            <Text>Sawyer</Text>
            <Text>tom_sawyer@gmail.com</Text>
            <Text>10000</Text>
            <Text>{dayjs("2023-08-26 06:17:51").format("D-MMM HH:mm:ss")}</Text>
          </Group>
        </Paper>
      </Stack>
    </Card>
  );
}
