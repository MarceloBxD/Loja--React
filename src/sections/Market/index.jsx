import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import { ProductCard } from "../../components/ProductCard";
import { Aside } from "../../components/Aside";
import { useApp } from "../../contexts/context";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

export const Market = () => {
  const { isOpen, setIsOpen, products } = useApp();

  return (
    <Flex
      w="100%"
      p="10px"
      justify="center"
      bgColor="#ccc"
      align="center"
      h="100%"
    >
      <Button
        variant="unstyled"
        position="fixed"
        top="10px"
        left="10px"
        title="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <VscMenu color="#000" size="30" />
      </Button>
      {isOpen && <Aside />}
      <Flex flexWrap="wrap" m="20px" gap="25px">
        {products.map((product) => (
          <Flex flexDir="column" m="45px">
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
            />
            <Button
              w="fit-content"
              position="relative"
              variant="unstyled"
              top="10px"
              justifySelf="center"
            >
              <IoIosAddCircleOutline color="#fff" size="40" />
            </Button>
          </Flex>
        ))}
      </Flex>
      <Button
        variant="unstyled"
        position="fixed"
        top="10px"
        right="10px"
        title="Carrinho"
      >
        <FaShoppingCart color="#000" size="20" />
      </Button>
    </Flex>
  );
};
