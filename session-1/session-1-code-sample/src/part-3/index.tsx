import React, { ChangeEvent, useState } from "react";
import "../App.css";
import Item from "../part-1/Item";

// 3. useState
//    - Анхны утга олгох
//    - Утга буцаах
//    - Олон state зарлах
//    - useState массив
//    - useState объект
//    - useState -г олон дуудах

function Part3() {
  //   - Анхны утга олгох.
  const initializeState = () => {
    return 1;
  };

  const counter = useState(() => initializeState());
  //   - Утга буцаах
  const count = counter[0];
  const setCount = counter[1];

  //   - Олон state зарлах
  //   - useState объект
  const [states, setStates] = useState({
    count: 0,
    hide: false,
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  });

  const updateSpecificStates = (left: number, top: number) => {
    setStates((state) => ({ ...state, left: left, top: top }));
  };

  const [hide, setHide] = useState(false);

  const onClickItemHandler = () => {
    count === 10 ? setHide(true) : setCount((value) => value + 1);
  };

  //   - useState -г олон дуудах
  const callMultipleTimes = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    count === 10 ? setHide(true) : setCount((value) => value + 1);
  };

  const onClickRestartHandler = () => {
    setHide(false);
    setCount(1);
  };

  //   - useState массив
  const [items, setItems] = useState([
    { id: 1, count: 1 },
    { id: 2, count: 2 },
    { id: 3, count: 4 },
    { id: 4, count: 3 },
  ]);

  const updateSpecificItems = (id: number, count: number) => {
    setItems([
      ...items,
      {
        id: id,
        count: count,
      },
    ]);
  };

  // Object.is
  const [message, setMessage] = useState("");
  //   const [messageObj, setMessage] = useState({ message: "", id: 1 });
  //   const [messageObj, setMessage] = useState({ message: "" });

  return (
    <>
      <h1>Part 3</h1>
      <div className="container">
        {!hide ? (
          <Item count={count} click={onClickItemHandler} />
        ) : (
          <div className="restart" onClick={onClickRestartHandler}>
            Show
          </div>
        )}
      </div>
      <br />
      <div>
        <input
          type="text"
          value={message}
          //   value={messageObj.message}
          placeholder="Enter a message"
          //   Rather, it enqueues the update operation.
          //   Then, after re-rendering the component, the argument of useState will be ignored
          //   and this function will return the most recent value.
          onChange={(e) => setMessage(e.target.value)}
          //   onChange={(e) => {
          //     setMessage((prev) => prev + e.target.value);
          //   }}

          //   onChange={(e) => {
          //     messageObj.message = e.target.value;
          //     setMessage(messageObj);
          //   }}

          //   onChange={(e) => {
          //     const newMessageObj = { message: e.target.value };
          //     setMessage(newMessageObj);
          //   }}

          //   onChange={e => {
          //     const val = e.target.value;
          //     setMessage(prevState => {
          //       return { ...prevState, message: val }
          //     });
          //   }}
        />
        <p>
          <strong>{message}</strong>
          {/* <strong>{messageObj.message}</strong> */}
        </p>
      </div>
    </>
  );
}

export default Part3;
