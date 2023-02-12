import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import { ProductCard } from "../../components/ProductCard";
import { Aside } from "../../components/Aside";
import { useApp } from "../../contexts/context";
import { FaShoppingCart } from "react-icons/fa";

export const Market = () => {
  const { isOpen, setIsOpen, products } = useApp();

  return (
    <Flex
      w="100%"
      p="10px"
      justify="center"
      align="center"
      h="100%"
      bgColor="#ccc"
    >
      <Flex flexWrap="wrap" m="20px" gap="25px">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </Flex>
      <Button
        variant="unstyled"
        position="fixed"
        top="10px"
        right="10px"
        title="Carrinho"
      >
        <FaShoppingCart size="20" />
      </Button>
    </Flex>
  );
};
