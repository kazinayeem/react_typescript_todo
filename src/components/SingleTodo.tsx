import React, { useState } from "react";
import Button from "../button/Button";

interface Todo {
  id: number;
  todo: string;
}

interface Props {
  data: { id: number; todo: string };
  updateTodo: (data: Todo, value: string) => void;
  deleteTodo: (id: number) => void;
}
const SingleTodo = (props: Props) => {
  const [istrue, setistrue] = useState<boolean>(false);
  const [value, setvalue] = useState<string>("");
  return (
    <React.Fragment>
      <tr>
        <td>{props.data.id}</td>
        {istrue ? (
          <input
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            type={"text"}
          />
        ) : (
          <td>{props.data.todo}</td>
        )}

        <td>
          <Button
            title="update"
            action={() => {
              setistrue(!istrue);
              setvalue(props.data.todo);
              props.updateTodo(props.data, value);
            }}
            color="info"
          />
        </td>
        <td>
          <Button
            title="delete"
            color="danger"
            action={() => {
              props.deleteTodo(props.data.id);
            }}
          />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default SingleTodo;
