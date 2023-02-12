import React from "react";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ProductCard = ({ title, descripion, image }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        backgroundColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        width: "230px",
        height: "300px",
        borderRadius: "8px",
      }}
    >
      <Text
        p="10px"
        borderRadius="10px"
        textAlign="center"
        fontWeight="bold"
        color="#000"
      >
        {title}
      </Text>
      <Text textAlign="center" fontWeight="300" color="#000">
        {descripion}
      </Text>
      <Img
        mb="15px"
        objectFit="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        h="100%"
        src={image}
      />
    </motion.div>
  );
};
