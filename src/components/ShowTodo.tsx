import React from "react";
import Button from "../button/Button";
import SingleTodo from "./SingleTodo";

interface Todo {
  id: number;
  todo: string;
}

interface Props {
  deleteTodo: (id: number) => void;
  updateTodo: (data: Todo, value: string) => void;
  todos: Todo[];
}
const ShowTodo = (props: Props) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#id</th>
            <th>Todo</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((data, index) => (
            <SingleTodo
              deleteTodo={props.deleteTodo}
              updateTodo={props.updateTodo}
              data={data}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
