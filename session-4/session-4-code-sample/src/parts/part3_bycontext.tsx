import React, { createContext } from "react";

// 3. Контекст api **(Contenxt api?)**
//    - Контекст үүсгэх **(How to create a context?)**
//    - Контекст дамжуулах **(How to use context provider?)**
//    - Контекст хүлээн авах **(How to use context consumer?)**

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

const ThemeContext = createContext<typeof theme>(theme);

class ThemedButton extends React.Component<{}, {}> {
  // static contextType = ThemeContext;

  render() {
    let context = this.context;

    return (
      <button
        style={{
          cursor: "pointer",
          padding: "5px",
          color: context.color,
        }}
      >
        click me!
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

function Toolbar() {
  return (
    <div>
      <h2>Toolbar</h2>
      <ThemedButton />
    </div>
  );
}

export default function Part3() {
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
