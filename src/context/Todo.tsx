import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const TodoContext = createContext<unknown | any>(undefined);

export const TodoContextProvider = ({ children }: any) => {
  const { t } = useTranslation("global");

  const storedTasks = JSON.parse(localStorage.getItem("task") || "[]");
  const [text, setText] = useState(storedTasks);
  //Open Editing Form:
  const [isEdited, setIsEdited] = useState(false);
  //Edit Todo:
  const [editedText, setEditedText] = useState(null);

  const addText = (task: string) => {
    setText((prevTask: any) => [...prevTask, task]);
    toast.success(t("TODO.toast"));
  };

  const deleteText = (id: string) => {
    setText((prevTask: string | any) =>
      prevTask.filter((t: { id: string }) => t.id !== id),
    );
    toast.success(t("TODO.toast_delete"));
  };

  const deleteAll = (id: string) => {
    setText((prevTask: string | any) =>
      prevTask.filter((t: { id: string }) => t.id === id),
    );
    toast.success(t("TODO.allTodos"));
  };

  const updateText = (id: string) => {
    setText((prevTask: string | any) =>
      prevTask.map((t: { id: string; checked: unknown }) =>
        t.id === id ? { ...t, checked: !t.checked } : t,
      ),
    );
  };

  const modifyEdit = (task: string | any) => {
    setText((prevTask: any[]) =>
      prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)),
    );
    closeEditForm();
    toast.success(t("TODO.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEdited(false);
  };

  const showEditForm = (task: string | any) => {
    setEditedText(task);
    setIsEdited(true);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(text));
  }, [text]);

  return (
    <TodoContext.Provider
      value={{
        text,
        addText,
        deleteText,
        updateText,
        deleteAll,
        modifyEdit,
        showEditForm,
        closeEditForm,
        isEdited,
        editedText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
