import { createFileRoute, Link } from '@tanstack/react-router';
import risat from '../assets/img/risat (2).svg';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

export const Route = createFileRoute('/note')({
  component: () => {
    const storedNote = JSON.parse(localStorage.getItem("note") || '[]');

    const [desc, setDesc] = useState<any>(storedNote);

    const descRef = useRef<any>();

    const addNote = () => {
      const description = descRef.current.value.trim();
      console.log(description);
      const newDesc = { description, id: new Date() };
      descRef.current.value = '';
      description === ''
        ? alert('enter a description')
        : setDesc([...desc, newDesc]);
    };

    const deleteNote = (index: any) => {
      const newNote = [...desc];
      newNote.splice(index, 1);
      setDesc(newNote);
    }

    useEffect(() => {
      localStorage.setItem("note", JSON.stringify(desc));
    }, [desc])

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
        <header className="flex items-center justify-around bg-indigo-700 text-white py-1 px-4 lg:px-3 lg:py-2">
          <div className="cursor-pointer">
            <Link to="/" className="flex items-center gap-2 tracking-wider">
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

        {/* hero */}
        <main className="dark:bg-black-500 dark:text-light lg:grid place-content-center place-items-center pt-4">
          <section className="w-full gap-4 lg:w-[400px] break-words px-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label
                  htmlFor="input-desc"
                  className="font-medium tracking-wide">
                  Description
                </label>
                <textarea
                  className="bg-light dark:bg-black-500 py-1 px-2  border border-black-500 dark:border-light rounded focus:outline-none placeholder:text-sm"
                  name=""
                  ref={descRef}
                  id="input-desc"
                  placeholder="Start typing.."></textarea>
              </div>
              <button
                className="bg-blue-700 text-light text-sm tracking-wide rounded-md font-medium mt-2 py-1 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out lg:mx-auto"
                onClick={addNote}>
                Add Note
              </button>
            </div>

            <div className="pt-6 grid gap-2">
              {desc.map(({description}: any, index: any) => {
              return (
                <div key={desc.id} className='flex justify-between items-center p-2 border border-solid border-black-500 dark:border-light rounded'>
                  <p key={desc.id} className='text-sm'>{description}</p>
                  <button className="bg-red-500 text-light py-[0.1rem] px-2 rounded transition-colors duration-300 ease-in-out hover:bg-red-700" onClick={() => deleteNote(index)}>
                    Delete
                  </button>
                </div>
              )
            })}
            </div>
          </section>

          <Button />
        </main>
      </main>
    );
  },
});
