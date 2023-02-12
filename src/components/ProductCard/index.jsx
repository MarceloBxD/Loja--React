import React from "react";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ProductCard = ({ title, descripion, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      transition={{ duration: 0.2 }}
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
        objectFit="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        src={image}
      />
    </motion.div>
  );
};
