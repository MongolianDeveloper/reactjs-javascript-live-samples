import React, { createContext, useContext } from "react";

// 5. Хаана useContext-г хэрэглэх вэ **(Where to use useContext?)**

type ThemeType = {
  color: string;
  fontSize: string;
  fontWeight: number;
};

const theme: ThemeType = {
  color: "blue",
  fontSize: "20px",
  fontWeight: 400,
};

const ThemeContext = createContext<ThemeType>(theme);

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ cursor: "pointer", padding: "5px", color: theme.color }}>
      click me!
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <h2>Toolbar</h2>
      <ThemedButton />
    </div>
  );
}

export default function Part5() {
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
