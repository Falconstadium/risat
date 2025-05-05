import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoNote } from "../../context/TodoNote";

const TodoList = () => {
  const { text } = useContext(todoNote);

  return (
    <ul className="grid gap-2 pt-8 dark:text-light lg:gap-3">
      {text
        .sort((a: any, b: any) => b.time - a.time)
        .map((task: any) => (
          <TodoItem key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default TodoList;
