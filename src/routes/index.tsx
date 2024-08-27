import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createFileRoute('/')({
  component: () => 
  <>
    <Navbar />
    <section className='grid place-content-center lg:place-items-center gap-3 lg:gap-5 dark:bg-black-500 dark:text-light'>
      <h1 className='font-bold text-3xl lg:text-5xl text-center leading-normal'>
        Your favorite <br /><span className='font-edu bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-medium'>tools together</span><br /> in one place.
      </h1>
      <button className='bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out font-medium text-white py-2 px-5 rounded-md text-sm'>
        Get Started
      </button>
    </section>
  </>
})