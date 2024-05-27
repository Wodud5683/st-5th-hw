import { createContext, useState, useContext, useEffect } from "react";

const TextContext = createContext();

export const useTextContext = () => {
  return useContext(TextContext);
};

export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() => {
    const storedTexts = localStorage.getItem("texts");
    return storedTexts ? JSON.parse(storedTexts) : [];
  });

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const addText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextContext.Provider value={{ texts, addText }}>
      {children}
    </TextContext.Provider>
  );
};
