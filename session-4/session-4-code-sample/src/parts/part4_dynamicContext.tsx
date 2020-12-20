import React, { createContext } from "react";

// 4. Контекст ашигласан жишээ **(Context examples)**
//    - Динамик контекст **(Dynamic context)**

type ThemesType = {
  [key: string]: {
    foreground: string;
    background: string;
  };
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
};

export const ThemeContext = createContext(themes.dark);

class ThemedButton extends React.Component<{ click?: () => void }, {}> {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button
        onClick={props.click}
        style={{
          cursor: "ponter",
          padding: "10px",
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        button
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

function Toolbar(props: { changeTheme: () => void }) {
  return <ThemedButton click={props.changeTheme}>Change Theme</ThemedButton>;
}

export default class Part4 extends React.Component<{}, ThemesType> {
  constructor(props: ThemesType) {
    super(props);
    this.state = {
      theme: themes.light,
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
        <ThemeContext.Provider value={this.state.theme}>
          <h2 style={{ color: this.state.theme.background }}>Toolbar</h2>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
      </div>
    );
  }
}
