import React from 'react'

const Subscription = () => {
  return (
    <div className='md:w-[80vw] w-[180vw] md:h-[25vh] h-[20vh] md:pl-20 pl-10 rounded-2xl bg-white flex justify-between md:mt-40 mt-10 md:px-32 m-auto'>
      <div>
        <h1 className='text-3xl font-semibold md:pt-10 pt-4'>
          Subscribe Now to 
        </h1>
        <h1 className='text-3xl font-semibold pt-1'>
          Get Special Features! 
        </h1>
        <p className='pt-2 md:pt-4'>
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <div className='flex items-center px-6 md:px-0'>
        <button className='md:mt-4  bg-[#ef3c3c] text-white font-semibold md:px-12 px-8 py-4 rounded-2xl hover:bg-white hover:text-red-600 hover:border-[red] hover:border-[1px]'>
            Subscribe Now
        </button>
      </div>
    </div>
  )
}

export default Subscription
