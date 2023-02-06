import { useState } from "react";
import shortid from "shortid";
import "./Todo.css";

export const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  const removeItem = (index: any) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1>You have {todos.length} todos</h1>

        <div className="todos"></div>

        {todos.map((curTodo, index) => (
          <div className={index.toString()} key={shortid.generate()}>
            <p key={shortid.generate()}>
              {curTodo}{" "}
              <button
                key={shortid.generate()}
                onClick={() => removeItem(index)}
              >
                Delete
              </button>
            </p>
          </div>
        ))}

        <input
          value={value}
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
            setTodos([...todos, value]);
            setValue("");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
