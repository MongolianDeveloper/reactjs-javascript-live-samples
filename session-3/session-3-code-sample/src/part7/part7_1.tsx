import React, { ChangeEvent, useState, useRef, useEffect } from "react";

// 7. Хэзээ useRef-г ашиглах вэ **(When is useRef helpful?)**
//    - Элемент focus хийх жишээ **(Focus Control sample)**

export default function Part7_1() {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current && inputEl.current.focus();
  }, []);

  const [value, setValue] = useState("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        value={value}
        ref={inputEl}
      />
      <br />
      <button>Save</button>
    </div>
  );
}
