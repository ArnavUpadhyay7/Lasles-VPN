import React from 'react'

const Landing = () => {
  return (
    <div className='bg-white w-[220%] md:w-full flex md:py-10 py-6 px-12 md:px-20'>
      <div className='md:w-[50%] w-[65%] md:pl-20'>
        <h1 className='md:text-5xl text-4xl font-semibold leading-tight'>
            Want anything to be easy with <span className='font-bold'>LaslesVPN.</span>
        </h1>
        <p className='md:py-8 py-6 text-[4vw] md:text-[1.2vw]'>
            Provide a network for all your needs with ease and fun using <span className='font-semibold'>LaslesVPN</span> discover interesting features from us.
        </p>
        <button className='mt-4 bg-[#ef3c3c] text-white font-semibold px-20 py-3 rounded hover:bg-white hover:text-red-600 hover:border-[red] hover:border-[1px]'>
            Get Started
        </button>
      </div>
      <div className='w-[50%]'>
        <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/01.svg" />
      </div>
    </div>
  )
}

export default Landing
