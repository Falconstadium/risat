import { createFileRoute, Link } from '@tanstack/react-router';
import Navbar_Todo from '../components/Navbar_Todo';
import { useEffect, useRef, useState } from 'react';

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

    return (
      <>
        <Navbar_Todo />
        <main className="dark:bg-black-500 dark:text-light grid place-content-center">
          <section className="w-full lg:w-[400px] break-words px-4">
            <div className="flex items-center justify-center gap-2">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 rounded focus:outline-none px-2 py-2 text-light dark:text-black-500 bg-black-500 dark:bg-light lg:text-sm font-medium"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-light rounded-md font-medium py-1 px-3 hover:bg-blue-700 transs duration-300 ease-in-out"
                onClick={addTask}>
                Add Task
              </button>
            </div>
            <ul className="pt-6 grid gap-2">
              {todo &&
                todo.map &&
                todo.map(({ text, completed }, index, id: any) => {
                  return (
                    <div className="flex justify-between items-center bg-black-500 text-light dark:bg-light dark:text-black-500 rounded px-2 py-2 font-medium lg:w-[360px] break-words lg:text-sm cursor-pointer">
                      <li
                        key={id}
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
          <button className="absolute bottom-4 left-2">
            <Link
              to="/dashbord"
              className="flex items-center gap-2 bg-black-500 dark:bg-light text-light dark:text-black-500 text-[12px] py-2 px-4 font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700 dark:hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Return to Dashbord
            </Link>
          </button>
        </main>
      </>
    );
  },
});
