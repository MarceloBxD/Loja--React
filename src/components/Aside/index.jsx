import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AsideItem } from "../AsideItem";
import { VscMenu } from "react-icons/vsc";
import { useApp } from "../../contexts/context";

export const Aside = () => {
  const { isOpen, setIsOpen, handleCloseAside } = useApp();

  return (
    <>
      <Flex
        w="15%"
        bgColor="#000"
        p="10px"
        position="fixed"
        flexDir="column"
        left="0"
        top="0"
        boxShadow="0 0 10px #000"
        h="100vh"
        display={isOpen ? "flex" : "none"}
        // transform={isOpen ? "translateX(0)" : "translateX(-15%)"}
        // transition="all 1s ease"
      >
        <Flex justify="space-between">
          <VscMenu
            position="fixed"
            top="10px"
            left="10px"
            onClick={() => handleCloseAside()}
            cursor="pointer"
            size="30px"
            color="#fff"
          />

          <Text
            fontSize="20px"
            fontWeight="bold"
            textShadow="1px 1px 2px #fff"
            cursor="default"
            color="#fff"
          >
            LojaApp
          </Text>
        </Flex>
        <Flex gap="5px" mt="20px" flexDir="column">
          <AsideItem>Contact</AsideItem>
          <AsideItem>Help</AsideItem>
          <AsideItem>Social Media</AsideItem>
          <AsideItem>Products</AsideItem>
        </Flex>
      </Flex>
    </>
  );
};
