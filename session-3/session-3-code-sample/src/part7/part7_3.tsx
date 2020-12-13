import React, {
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  forwardRef,
} from "react";

// 7. Хэзээ useRef-г ашиглах вэ **(When is useRef helpful?)**
//    - useRef-н буруу хэрэглээ **(An useRef anti-pattern use case)**
//    - useRef-н зөв хэрэглээ **(An useRef good use case)**
// refContainer.current.setAttribute("disabled", true);

type Props = {
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const InputComponent = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input type="text" onChange={props.change} value={props.value} ref={ref} />
));

export default function Part7_3() {
  //    - useRef-н буруу хэрэглээ -> useState
  //    - useRef-н зөв хэрэглээ -> button disabled

  const inputEl = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    inputEl.current && inputEl.current.focus();
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // inputEl.current && inputEl.current.value = event.target.value;
    // buttonRef.current.setAttribute('disabled', true);
    setValue(event.target.value);
  };

  return (
    <div>
      <InputComponent ref={inputEl} change={onChangeHandler} value={value} />
    </div>
  );
}
