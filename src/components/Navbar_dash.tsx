import { Link } from "@tanstack/react-router"

const Navbar_dash = () => {
  return (
    <>
      <header className="bg-indigo-700 text-white py-4 px-4 lg:py-3 lg:px-12">
      <div>
        <Link to="/" className="tracking-wide">risat</Link>
      </div>
      </header>
    </>
  )
}

export default Navbar_dash