import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const products = [
    {
      title: "Product 1",
      description: "Description 1",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300",
    },
  ];

  const handleCloseAside = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen,
    handleCloseAside,
    products,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
