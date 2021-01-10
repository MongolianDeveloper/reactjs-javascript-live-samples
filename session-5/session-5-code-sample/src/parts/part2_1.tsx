import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// 2. useReducer болон useState **(useReducer vs useState)**
//    - Олон өгөгдөлийг нэг акшинаар өөрчлөх **(Multiple state transitions operate on one state object)**
//    - Домайн логикыг салгах **(Logic for state changes)**

type Action =
  | { type: "DO_TODO"; payload: { id: string } }
  | { type: "UNDO_TODO"; payload: { id: string } }
  | { type: "ADD_TODO"; payload: { task: string; id: string } };

type State = {
  task: string;
  id: string;
  complete: boolean;
};

const initialState: State[] = [];

const todoReducer = (state: State[], action: Action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.payload.task,
        id: action.payload.id,
        complete: false,
      });
    default:
      throw new Error();
  }
};

export default function Part2() {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  const handleAddToDo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: uuidv4(),
        task: `Task ${todoList.length + 1}`,
      },
    });
  };

  const handleDo = (id: string) => {
    dispatch({
      type: "DO_TODO",
      payload: {
        id: id,
      },
    });
  };

  const handleUnDo = (id: string) => {
    dispatch({
      type: "UNDO_TODO",
      payload: {
        id: id,
      },
    });
  };

  return (
    <>
      The number of tasks: {todoList.length}{" "}
      <button onClick={handleAddToDo}>ADD TASK</button>
      <ul style={{ textAlign: "left" }}>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.task + " "}
              {item.complete ? (
                <button onClick={() => handleUnDo(item.id)}>Undo</button>
              ) : (
                <button onClick={() => handleDo(item.id)}>Do</button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
