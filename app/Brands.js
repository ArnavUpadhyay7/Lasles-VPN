import React from 'react'

const Brands = () => {
  return (
    <div className='md:w-[100%] w-[225%] flex justify-center gap-8 md:gap-10 bg-[#F8F8F8]'>
      <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/netflix.svg" />
      <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/reddit.svg" />
      <img className='hidden md:flex' src="https://mrrufrus.github.io/LaslesVPN-layout/assets/amazon.svg" />
      <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/discord.svg" />
      <img src="https://mrrufrus.github.io/LaslesVPN-layout/assets/spotify.svg" />
    </div>
  )
}

export default Brands
