import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../context/Todo";

const TodoList = () => {
  const { text } = useContext(TodoContext);

  return (
    <ul className="grid gap-2 dark:text-light lg:gap-3">
      {text
        .sort((a: { time: number }, b: { time: number }) => b.time - a.time)
        .map((task: { id: string }) => (
          <TodoItem key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default TodoList;
