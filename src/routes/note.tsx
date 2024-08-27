import { createFileRoute, Link } from '@tanstack/react-router'
import Navbar_Note from '../components/Navbar_Note'

export const Route = createFileRoute('/note')({
  component: () => 
  <>
    <Navbar_Note />
    <section className='dark:bg-black-500 dark:text-light grid place-content-center'>
      <h1>Hello world!</h1>
    </section>
    <button className='absolute bottom-4 left-2'>
      <Link to='/dashbord' className='flex items-center gap-2 bg-black-500 dark:bg-light text-light dark:text-black-500 text-[12px] py-2 px-4 font-medium rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700 dark:hover:bg-gray-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        Return to Dashbord
      </Link>
    </button>
  </>
})