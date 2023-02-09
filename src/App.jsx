import React from "react";
import { Flex } from "@chakra-ui/react";
import "./App.css";
import { Aside } from "./components/Aside";
import { Market } from "./sections/Market";

function App() {
  return (
    <Flex>
      <Aside />
      <Market />
    </Flex>
  );
}

export default App;
