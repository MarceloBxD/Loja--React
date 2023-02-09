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

  const produtos = [
    {
      id: 1,
      name: "Produto 1",
      price: "R$ 1000,00",
      description: "Descrição do produto 1",
    },
    {
      id: 2,
      name: "Produto 2",
      price: "R$ 1200,00",
      description: "Descrição do produto 2",
    },
    {
      id: 3,
      name: "Produto 3",
      price: "R$ 1500,00",
      description: "Descrição do produto 3",
    },
  ];

  const handleCloseAside = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen,
    handleCloseAside,
    produtos,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
