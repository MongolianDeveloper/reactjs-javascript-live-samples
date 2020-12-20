import React, { createContext } from "react";

// 4. Контекст ашигласан жишээ **(Context examples)**
//    - Шаардлагагүй рендэр хийгдэхээс сэргийлэх **(Avoid unintentional renders)**

type ThemesType = {
  theme: {
    foreground: string;
    background: string;
  };
};

export const themes: ThemesType = {
  theme: {
    foreground: "#000000",
    background: "#eeeeee",
  },
};

export const ThemeContext = createContext({
  theme: {
    foreground: "#000000",
    background: "#eeeeee",
  },
});

function ThemeTogglerButton() {
  console.log("...ThemeTogglerButton");
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          style={{
            cursor: "ponter",
            padding: "10px",
            color: theme.foreground,
            backgroundColor: theme.background,
          }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default class Part4 extends React.Component<{}, ThemesType> {
  constructor(props: ThemesType) {
    super(props);

    this.state = {
      theme: {
        foreground: "#000000",
        background: "#eeeeee",
      },
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.forceUpdate();
    // this.setState((state) => ({
    //   ...state,
    // }));
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeTogglerButton />
        </ThemeContext.Provider>
        <div onClick={this.clickHandler}>click here</div>
      </div>
    );
  }
}
