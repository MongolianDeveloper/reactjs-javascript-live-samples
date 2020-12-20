import React from "react";

// 2. Хэзээ контекстыг хэрэглэх вэ **(When to use context?)**
//    - Inversion of control зарчим **(Inversion of control)**

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

class ThemedButton extends React.Component<ThemeType, {}> {
  render() {
    return (
      <button
        style={{ cursor: "pointer", padding: "5px", color: this.props.color }}
      >
        click me!
      </button>
    );
  }
}

class ThemedButton2 extends React.Component<ThemeType, {}> {
  render() {
    return (
      <button
        style={{ cursor: "pointer", padding: "5px", color: this.props.color }}
      >
        click me!
      </button>
    );
  }
}

function Toolbar() {
  return <h2>Toolbar</h2>;
}

export default function Part2() {
  const themeButton = (
    <div style={{ padding: "5px", border: "1px solid red" }}>
      <ThemedButton {...theme} />
      <ThemedButton2 {...theme} />
    </div>
  );

  return (
    <>
      <Toolbar />
      {themeButton}
    </>
  );
}
