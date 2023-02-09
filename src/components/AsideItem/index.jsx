import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const AsideItem = ({ children }) => {
  return (
    <Flex
      w="95%"
      borderRadius="10px"
      p="5px"
      cursor="pointer"
      _hover={{ bgColor: "#ccc", color: "#000" }}
      bgColor="#bbb"
    >
      <Text fontWeight="bold" fontSize="16px" color="#000">
        {children}
      </Text>
    </Flex>
  );
};
