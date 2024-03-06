import React from 'react'
import ReviewCard from './ReviewCard'
import Subscription from './Subscription'

const CustomerReviews = () => {
  return (
    <div className='md:h-[110vh] h-[150vh] md:w-[100%] w-[225%] bg-[#F8F8F8] pt-6'>
      <h1 className='text-center text-3xl font-bold leading-relaxed'>
        Trusted by Thousands of 
      </h1>
      <h1 className='text-center text-3xl font-bold'>
        Happy Customer
      </h1>
      <p className='text-center mt-6 text-[#4F5665]'>
        These are the stories of our customers who have joined us with great
      </p>
      <p className='text-center mt-1 text-[#4F5665]'>
        pleasure when using this crazy feature.
      </p>
      <ReviewCard />
      <Subscription />
    </div>
  )
}

export default CustomerReviews
