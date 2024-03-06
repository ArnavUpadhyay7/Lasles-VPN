import React from 'react'

const Features = () => {
  return (
    <div className='md:w-[100%] w-[220%] md:gap-0 gap-20 flex py-12 md:py-20 px-20 md:px-40 my-10'>

      <div className='md:w-[60%]'>
        <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/05.svg" />
      </div>

      <div className='md:w-[40%]'>
        <h1 className='md:text-[2.5vw] text-2xl font-semibold leading-tight'>
        We Provide Many Features You Can Use
        </h1>
        <h3 className='md:flex hidden pt-6 pr-20 text-[1vw] text-[#4F5665] leading-8'>
        You can explore the features that we provide with fun and have their own functions each feature.
        </h3>

        <div className='flex gap-2 text-[#4F5665] pt-12 md:pt-6'>
            <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/06.svg"/>
            <p>Powerfull online protection.</p>
        </div>
        <div className='flex gap-2 text-[#4F5665] pt-6'>
            <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/06.svg"/>
            <p>Internet without borders.</p>
        </div>
        <div className='flex gap-2 text-[#4F5665] pt-6'>
            <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/06.svg"/>
            <p>Supercharged VPN</p>
        </div>
        <div className='flex gap-2 text-[#4F5665] pt-6'>
            <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/06.svg"/>
            <p>No specific time limits.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Features
