import { Link } from "@tanstack/react-router"
import risat from '../assets/img/risat (2).svg'

const Navbar_dash = () => {
  return (
    <>
      <header className="bg-indigo-700 text-white py-4 px-4 lg:py-3 lg:px-12">
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-4" src={risat} alt="risat-logo" />
        <Link to="/" className="tracking-wide">risat</Link>
      </div>
      </header>
    </>
  )
}

export default Navbar_dash