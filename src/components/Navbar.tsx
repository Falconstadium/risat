import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-indigo-700 text-white py-4 px-4 lg:px-12 lg:py-3">
        <div>
          <Link to="/" className="font-medium tracking-wide">risat</Link>
        </div>
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link to="/" className="[&.active]:bg-black px-2 py-1 rounded-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="[&.active]:bg-black px-2 py-1 rounded-sm">
              About
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
export default Navbar