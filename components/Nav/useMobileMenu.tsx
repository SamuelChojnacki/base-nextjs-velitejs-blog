"use client"
import React, { createContext, useContext, useState, FC, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";


type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

type MenuProviderProps = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
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
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
