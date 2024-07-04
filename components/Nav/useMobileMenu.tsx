"use client";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { useMediaQuery } from "usehooks-ts";

type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

type MenuProviderProps = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
  setIsOpen: () => {},
});

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (matches && isOpen) {
      setIsOpen(false);
    }
  }, [matches, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu doit être utilisé au sein d'un MenuProvider");
  }
  return context;
};
