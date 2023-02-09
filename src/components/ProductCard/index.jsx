import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useApp } from "../../contexts/context";

export const ProductCard = () => {
  return (
    <Flex
      w="230px"
      p="7px"
      borderRadius="8px"
      flexDir="column"
      h="270px"
      bgColor="#fff"
    >
      <Text textAlign="center" fontWeight="bold" color="#000">
        Aqui virá o produto
      </Text>
      <Button
        alignSelf="center"
        mt="auto"
        w="fit-content"
        bgColor="orange"
        _hover={{ bgColor: "#fff", color: "#000" }}
        color="#fff"
        variant="ghost"
      >
        Comprar
      </Button>
    </Flex>
  );
};
