import React, {
  Profiler,
  memo,
  useContext,
  useMemo,
  useState,
  ChangeEvent,
} from "react";
import { unstable_trace as trace } from "scheduler/tracing";

// 6. useContext болон memoize **(Optimizing a context component by using memoization)**
//    - Контекстыг салгах **(Split contexts that don't change together)**
//    - Компонентыг хувааж memo ашиглах **(Split component in two, put memo in between)**
//    - Компонент дотор useMemo ашиглах **(One component with useMemo inside)**

function handleRender(id: string, interactions: any) {
  console.log(
    id,
    Array.from(interactions, (interaction: any) => interaction.name)
  );
}

const ThemeContext = React.createContext("blue");

// Option1
function Button1(props: { children: any }) {
  let theme = useContext(ThemeContext);
  return <ThemedButton theme={theme} />;
}

const ThemedButton = memo((props: { theme: string }) => {
  return (
    <Profiler id={`option1-${props.theme}`} onRender={handleRender}>
      <button
        className={props.theme}
        style={{ padding: "15px", margin: "0 10px", cursor: "pointer" }}
      >
        button-1
      </button>
    </Profiler>
  );
});

// Option2
function Button2(props: { children: any }) {
  let theme = useContext(ThemeContext);

  return useMemo(() => {
    console.log("render logic option2");
    return (
      <Profiler id={`option2-${theme}`} onRender={handleRender}>
        <button
          className={theme}
          style={{ padding: "15px", margin: "0 10px", cursor: "pointer" }}
        >
          button-2
        </button>
      </Profiler>
    );
  }, [theme]);
}

export default function Part6() {
  const [theme, setTheme] = useState("red");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    trace("change theme", performance.now(), () => {
      setTheme(event.currentTarget.value);
    });
  };

  //
  const contextValue = theme.trim();

  return (
    <div>
      <p>
        Add some whitespace to re-render App but don't change the context value.
      </p>
      <label htmlFor="theme">theme: </label>
      <input id="theme" onChange={handleChange} value={theme} />
      <ThemeContext.Provider value={contextValue}>
        <Button1>Option 1</Button1>
        <Button2>Option 2</Button2>
      </ThemeContext.Provider>
    </div>
  );
}
