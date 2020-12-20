import React from "react";

// 1. Контекст гэж ву вэ **(What is a context in react?)**

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

function Toolbar(props: typeof theme) {
  return (
    <div>
      <h2>Toolbar</h2>
      <ThemedButton {...props} />
    </div>
  );
}

export default function Part1() {
  return <Toolbar {...theme} />;
}
