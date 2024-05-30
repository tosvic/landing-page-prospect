import ban from '/public/banner.png'
import { Carousel  } from 'flowbite-react'

const Hero = () => {
  return (
    <div className='bg-neutralsilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className= 'w-full mx-auto'>
        <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
          
          <div>
            <img src={ban} alt="" />
          </div>

          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutraldgray md:w-3/4 leading-snug '>Lessons and insights 
                <span className='text-brandprimary leading-snug'>from 8 years</span></h1>
                <p className='text-neutraldgray text-base mb-8'>where to grow your business</p>
                <button className='btn-primary'>Register</button>
          </div>

        </div>


        <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
          <div>
            <img src={ban} alt="" />
          </div>

          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutraldgray md:w-3/4 leading-snug '>Lessons and insights 
                <span className='text-brandprimary leading-snug'>from 8 years</span></h1>
                <p className='text-neutraldgray text-base mb-8'>where to grow your business</p>
                <button className='btn-primary'>Register</button>
          </div>
        </div>


        <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
          <div>
            <img src={ban} alt="" />
          </div>

          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutraldgray md:w-3/4 leading-snug '>Lessons and insights 
                <span className='text-brandprimary leading-snug'>from 8 years</span></h1>
                <p className='text-neutraldgray text-base mb-8'>where to grow your business</p>
                <button className='btn-primary'>Register</button>
          </div>
        </div>
      </Carousel>

{/* <Carousel >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel> */}



        </div>
    </div>
  )
}

export default Hero