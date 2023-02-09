import { Flex } from "@chakra-ui/react";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import { useApp } from "../../contexts/context";
import { ProductCard } from "../../components/ProductCard";
import { Aside } from "../../components/Aside";

export const Market = () => {
  const { isOpen, setIsOpen, handleCloseAside, produtos} = useApp();

  

  return (
    <Flex w="100%" p="10px" flex="1" h="100vh" bgColor="#ccc">
      <Flex flex="1">
        <Aside />
      </Flex>
      <Flex p="40px" flex="5">
        <ProductCard />
      </Flex>
    </Flex>
  );
};
