import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-indigo-700 text-white py-4 px-4 lg:px-12 lg:py-3">
        <div>
          <Link to="/" className="tracking-wide">risat</Link>
        </div>
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link to="/" className="[&.active]:bg-black-500 px-2 py-1 rounded hover:bg-black-500 transition-colors duration-300 ease-in-out lg:text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="[&.active]:bg-black-500 px-2 py-1 rounded hover:bg-black-500 transition-colors duration-300 ease-in-out lg:text-sm">
              About
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
export default Navbar