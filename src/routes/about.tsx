import { createFileRoute } from '@tanstack/react-router'
import Footer_About from '../components/Footer_About'
import Navbar from '../components/Navbar'

export const Route = createFileRoute('/about')({
  component: () => 
  <>
    <Navbar />
    <section className='text-center grid gap-4 place-content-center px-4 dark:bg-black-500 dark:text-light'>
      <h4 className='font-medium text-lg'>risat is a platform that provides you with all the tools that we use everyday.</h4>
      <h1 className='font-bold text-3xl font-IBM italic'>Hope you like it.</h1>
    </section>
    <Footer_About />
  </>
})