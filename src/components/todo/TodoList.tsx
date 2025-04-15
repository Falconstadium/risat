import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo, showEditForm }: any) => {
  return (
    <ul className="grid gap-4 pt-8 dark:text-light lg:gap-5">
      {todos
        .sort((a: any, b: any) => b.time - a.time)
        .map((task: any) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            showEditForm={showEditForm}
          />
        ))}
    </ul>
  );
};

export default TodoList;
