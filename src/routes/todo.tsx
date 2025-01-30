import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";

import NavbarDash from "../components/NavbarDash";
import AnimationLoading from "../components/AnimationLoading";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import EditForm from "../components/todo/EditForm";
import Button from "../components/Button";

export const Route = createFileRoute("/todo")({
  component: () => {
    const { t } = useTranslation("global");

    //localStorage
    const storedTasks = JSON.parse(localStorage.getItem("task") || "[]");

    const [todos, setTodos] = useState<any>(storedTasks);
    //Open Editing Form:
    const [isEdited, setIsEdited] = useState(false);
    //Edit Todo:
    const [editedTodo, setEditedTodo] = useState(null);

    const addTodo = (task: any) => {
      setTodos((prevTask: any) => [...prevTask, task]);
      toast.success(t("TODO.toast"));
    };

    const deleteTodo = (id: any) => {
      setTodos((prevTask: any) => prevTask.filter((t: any) => t.id !== id));
      toast.success(t("TODO.toast_delete"));
    };

    const updateTodo = (id: any) => {
      setTodos((prevTask: any) =>
        prevTask.map((t: any) =>
          t.id === id ? { ...t, checked: !t.checked } : t,
        ),
      );
    };

    const modifyEdit = (task: any) => {
      setTodos((prevTask: any) =>
        prevTask.map((t: any) =>
          t.id === task.id ? { ...t, name: task.name } : t,
        ),
      );
      closeEditForm();
      toast.success(t("TODO.toast_edit"));
    };

    const closeEditForm = () => {
      setIsEdited(false);
    };

    const showEditForm = (task: any) => {
      setEditedTodo(task);
      setIsEdited(true);
    };

    // darkMode
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem("task", JSON.stringify(todos));
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [todos, dark]);

    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1500);
    }, []);

    return (
      <article
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr]`}
      >
        <NavbarDash toggleMode={toggleMode} />
        {load ? (
          <AnimationLoading />
        ) : (
          <main className="bg-white dark:bg-black-500">
            <section className="w-full px-4 pt-20">
              {isEdited && (
                <EditForm
                  modifyEdit={modifyEdit}
                  editedTodo={editedTodo}
                  closeEditForm={closeEditForm}
                />
              )}
              <TodoForm addTodo={addTodo} />
              {todos && (
                <TodoList
                  todos={todos}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                  showEditForm={showEditForm}
                />
              )}
            </section>
            <Button />

            <Toaster richColors />
          </main>
        )}
      </article>
    );
  },
});
