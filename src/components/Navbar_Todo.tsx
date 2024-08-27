import { Link } from "@tanstack/react-router"

const Navbar_Todo = () => {
  return (
    <>
      <header className="flex justify-around bg-indigo-700 text-white py-4 px-4 lg:px-3">
      <div>
        <Link to="/" className="tracking-wide">risat</Link>
      </div>
      <div>
        <span className="text-sm font-medium">TODO List</span>
      </div>
      </header>
    </>
  )
}

export default Navbar_Todo