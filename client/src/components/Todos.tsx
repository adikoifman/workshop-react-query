import axios from "axios";
import { TodoCard } from "./TodoCard";
import { Todo } from "../common/types/todo.interface";
import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { useQuery } from "@tanstack/react-query";

export function Todos() {
  const { data: todos , error } = useQuery({
    queryKey: ["todos"], 
    queryFn: fetchTodo,
  });
  const [_todos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {
  //   fetchTodo();
  // }, []);

  async function fetchTodo() {
    const { data: fetchedData } = await axios.get<Todo[]>("/api/todos");
    // setTodos(data);
    return fetchedData;
  }

  return (
    <>
    <div className="todo-container">
      {todos?.map((todo, index) => (
        <TodoCard todo={todo} setTodos={setTodos} index={index} key={todo.id} />
      ))}
    </div>
    <AddTodo setTodos={setTodos} />
    </>
  );
}
