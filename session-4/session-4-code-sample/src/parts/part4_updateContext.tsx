import React, { createContext } from "react";

// 4. Контекст ашигласан жишээ **(Context examples)**
//    - Хүлээн авагч компонентоос контекстын утгыг өөрчлөх **(Updating context from a nested component)**

type ThemesType = {
  [key: string]: any;
  toggleTheme: () => void;
};

export const themes: ThemesType = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
  toggleTheme: () => {},
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
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

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default class Part4 extends React.Component<{}, ThemesType> {
  constructor(props: ThemesType) {
    super(props);

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}
