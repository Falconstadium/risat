import { useContext } from "react";
import { TodoContext } from "../../context/Todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { text } = useContext(TodoContext);

  return (
    <ul className="grid gap-2 dark:text-light lg:gap-3">
      {text
        .sort((a: { time: number }, b: { time: number }) => b.time - a.time)
        .map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default TodoList;
