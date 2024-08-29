import { Link } from "@tanstack/react-router"
import risat from '../assets/img/risat (2).svg'

const Navbar_Note = () => {
  return (
    <>
      <header className="flex justify-around bg-indigo-700 text-white py-4 px-4 lg:px-3">
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-4" src={risat} alt="risat-logo" />
        <Link to="/" className="tracking-wide">risat</Link>
      </div>
      <div>
        <span className="text-sm font-medium">Note</span>
      </div>
      </header>
    </>
  )
}

export default Navbar_Note