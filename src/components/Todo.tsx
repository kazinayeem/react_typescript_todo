import React, { ChangeEvent, useState } from "react";
import Button from "../button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Todo = {
  id: number;
  todo: string;
};

type Props = {
  addtodo: (data: Todo) => void;
  clearAll: () => void;
};
const Todo = (props: Props) => {
  const [todo, settodo] = useState<string>("");
  const changeHandeler = (event: ChangeEvent<HTMLInputElement>) => {
    settodo(event.target.value);
  };

  const add = () => {
    const data = {
      id: Math.round(Math.random() * 99999999),
      todo: todo,
    };
    toast("added successfull");
    props.addtodo(data);
  };
  return (
    <div>
      <ToastContainer />
      <div className="w-100 m-auto gap-2 d-flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              add();
            }
          }}
          className="form-control text-center"
          type="text"
          name="todo"
          onChange={changeHandeler}
          placeholder="todo"
        />
        <Button title="Add todo" action={add} color="info" />
        <Button
          title="clear all "
          action={() => {
            props.clearAll();
          }}
          color="danger"
        />
      </div>
    </div>
  );
};

export default Todo;
