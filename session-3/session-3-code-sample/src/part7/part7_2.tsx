import React, {
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  forwardRef,
} from "react";

// 7. Хэзээ useRef-г ашиглах вэ **(When is useRef helpful?)**
//    - Эцэг компонент руу ref дамжуулах **(Exposing DOM Refs to Parent Components)**

type Props = {
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const InputComponent = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input type="text" onChange={props.change} value={props.value} ref={ref} />
));

export default function Part7_2() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    inputEl.current && inputEl.current.focus();
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/* <input
        type="text"
        onChange={onChangeHandler}
        value={value}
        ref={inputEl}
      /> */}
      <InputComponent ref={inputEl} change={onChangeHandler} value={value} />
    </div>
  );
}
