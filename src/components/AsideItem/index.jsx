import { Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export const AsideItem = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
      style={{
        width: "95%",
        borderRadius: "10px",
        padding: "8px",
        cursor: "pointer",
        backgroundColor: "#bbb",
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Text fontWeight="bold" fontSize="16px" color="#000">
        {children}
      </Text>
    </motion.div>
  );
};
