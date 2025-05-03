import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";

import NavbarDash from "../components/NavbarDash";
import AnimationLoading from "../components/AnimationLoading";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import EditForm from "../components/todo/EditForm";
import Button from "../components/Button";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/todo")({
  component: () => {
    //translation
    const { t } = useTranslation("global");

    //localStorage
    const storedTasks = JSON.parse(localStorage.getItem("task") || "[]");

    const [todos, setTodos] = useState(storedTasks);
    //Open Editing Form:
    const [isEdited, setIsEdited] = useState(false);
    //Edit Todo:
    const [editedTodo, setEditedTodo] = useState(null);

    const addTodo = (task: string) => {
      setTodos((prevTask: any) => [...prevTask, task]);
      toast.success(t("TODO.toast"));
    };

    const deleteTodo = (id: string) => {
      setTodos((prevTask: string | any) =>
        prevTask.filter((t: { id: string }) => t.id !== id),
      );
      toast.success(t("TODO.toast_delete"));
    };

    const deleteAll = (id: string) => {
      setTodos((prevTask: string | any) =>
        prevTask.filter((t: { id: string }) => t.id === id),
      );
      toast.success(t("TODO.allTodos"));
    };

    const updateTodo = (id: string) => {
      setTodos((prevTask: string | any) =>
        prevTask.map((t: { id: string; checked: unknown }) =>
          t.id === id ? { ...t, checked: !t.checked } : t,
        ),
      );
    };

    const modifyEdit = (task: string | any) => {
      setTodos((prevTask: any[]) =>
        prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)),
      );
      closeEditForm();
      toast.success(t("TODO.toast_edit"));
    };

    const closeEditForm = () => {
      setIsEdited(false);
    };

    const showEditForm = (task: string | any) => {
      setEditedTodo(task);
      setIsEdited(true);
    };

    useEffect(() => {
      localStorage.setItem("task", JSON.stringify(todos));
    }, [todos]);

    // darkMode
    const { theme, toggleTheme } = useContext(themeContext);

    //animation
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);

    return (
      <main className={`${theme && "dark"}`}>
        {load ? (
          <AnimationLoading theme={theme} />
        ) : (
          <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
            <NavbarDash toggleTheme={toggleTheme} />

            <main className="bg-white dark:bg-black-500">
              <section className="container mx-auto w-full px-2 pt-20">
                {isEdited && (
                  <EditForm
                    modifyEdit={modifyEdit}
                    editedTodo={editedTodo}
                    closeEditForm={closeEditForm}
                  />
                )}

                <TodoForm
                  todos={todos}
                  addTodo={addTodo}
                  deleteAll={deleteAll}
                />
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
          </article>
        )}
      </main>
    );
  },
});
