import { useState, useRef } from "react";

export const Todo = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  let i = 1;
  const ref = useRef(null);

  const addItemCount = () => {
    setCount(count + 1);
  };

  const removeItem = (i: any) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  /*
  const removeItem = (i: any) => {
    const newItem = todos.filter((todo) => todo.i != i);
  };*/

  return (
    <>
      <h1>You have {count} todos</h1>
      <h2>value {value} </h2>
      <div className="todos"></div>

      <input
        // value={value}
        required
        placeholder="Enter item"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (value.length === 0) {
            return alert("Write todo");
          }
          addItemCount();
          setTodos([...todos, value]);
          setValue("");
        }}
      >
        Submit
      </button>

      {todos.map((curTodo, i) => (
        <div ref={ref} className={i.toString()} key={i}>
          <p key={i}>
            {curTodo}{" "}
            <button key={i} onClick={removeItem}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </>
  );
};
