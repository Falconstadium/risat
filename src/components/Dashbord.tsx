import { Link } from "@tanstack/react-router"

const Dashbord = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 place-items-center lg:gap-0 place-content-center gap-6 lg:gap-y-4 dark:bg-black-500 dark:text-light lg:px-32">
          <div className="text-center rounded border border-solid  border-black-500 dark:border-light w-[300px] lg:w-[350px] py-4 lg:py-6 grid gap-4 place-items-center">
            <h2 className="text-4xl font-semibold lg:text-5xl">TODO List</h2>
            <button className="font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200 ease-in-out">
              <Link className="flex items-center gap-2 text-lg" to="/todo">
                Go to
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>

          <div className="text-center rounded border border-solid border-black-500 dark:border-light w-[300px] lg:w-[350px] py-4 lg:py-6 grid gap-4 place-items-center">
            <h2 className="text-4xl lg:text-5xl font-semibold">Notes</h2>
            <button className="font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200 ease-in-out">
              <Link className="flex items-center gap-2 text-lg" to="/note">
                Go to
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </section>
    </>
  )
}

export default Dashbord