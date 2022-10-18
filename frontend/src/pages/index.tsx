import { NextPage } from "next";
import { Button, Text, Container } from "@mantine/core";
import { useState } from "react";

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Container>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count + 1)}>Count Up!!</Button>
    </Container>
  );
};

export default Page;
