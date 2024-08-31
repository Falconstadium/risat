import { createFileRoute, Link } from '@tanstack/react-router';
import risat from '../assets/img/risat (2).svg';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

export const Route = createFileRoute('/todo')({
  component: () => {
    const storedTasks = JSON.parse(localStorage.getItem('task') || '[]');

    const [todo, setTodo] = useState<any[]>(storedTasks);

    const inputRef: any = useRef();

    const addTask = () => {
      const text = inputRef.current.value.trim();
      const newItem = { completed: false, text, id: Date.now() };
      text === '' ? alert('enter a Task') : setTodo([...todo, newItem]);
      inputRef.current.value = '';
    };

    useEffect(() => {
      localStorage.setItem('task', JSON.stringify(todo));
    }, [todo]);

    const completTask = (index: any) => {
      const newTodo = [...todo];
      newTodo[index].completed = !newTodo[index].completed;
      setTodo(newTodo);
    };

    const deleteTask = (index: any) => {
      const newTodo = [...todo];
      newTodo.splice(index, 1);
      setTodo(newTodo);
    };

    // darkMode
    const darkMode = JSON.parse(localStorage.getItem('mode') || '[]');
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem('mode', JSON.stringify(dark));
    }, [dark]);

    return (
      <main
        className={`${dark && 'dark'} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]`}>
        {/* header */}
        <header className="flex items-center justify-around bg-indigo-700 text-white py-1 px-4 lg:px-3 lg:py-2">
          <div className="cursor-pointer">
            <Link to="/" className="flex items-center gap-2 tracking-wide">
            <img className="w-4" src={risat} alt="risat-logo" />
              risat
            </Link>
          </div>

          <button onClick={toggleMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-black-500 dark:text-light transition-colors duration-300 ease-in-out">
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>
          </button>
        </header>

        {/* main */}
        <main className="dark:bg-black-500 dark:text-light grid place-content-center">
          <section className="w-full lg:w-[400px] break-words px-4">
            <div className="flex items-center justify-center gap-2">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 rounded focus:outline-none px-2 py-1 dark:text-light bg-light border border-solid border-black-500 dark:bg-black-500 dark:border-light lg:text-sm font-medium"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 text-light rounded-md font-medium tracking-wide py-1 px-4 hover:bg-blue-600 transs duration-300 ease-in-out text-sm"
                onClick={addTask}>
                Add Task
              </button>
            </div>
            <ul className="pt-6 grid gap-2">
              {todo &&
                todo.map &&
                todo.map(({ text, completed }, index) => {
                  return (
                    <div className="flex justify-between items-center bg-black-500 text-light dark:bg-light dark:text-black-500 rounded px-2 py-2 font-medium lg:w-[360px] break-words lg:text-sm cursor-pointer">
                      <li
                        key={text.id}
                        id={text.id}
                        className={completed ? 'line-through' : ''}
                        onClick={() => completTask(index)}>
                        {text}
                      </li>
                      <button
                        className="bg-red-500 text-light py-[0.1rem] px-2 rounded transition-colors duration-300 ease-in-out hover:bg-red-700"
                        onClick={() => deleteTask(index)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
            </ul>
            {/* <li className='dark:bg-light text-black-500 rounded px-2 py-1 font-medium lg:text-sm'>hhhh</li>
              <li className='dark:bg-light text-black-500 rounded px-2 py-1 font-medium lg:text-sm'>hhhh</li> */}
          </section>
          <Button />
        </main>
      </main>
    );
  },
});
