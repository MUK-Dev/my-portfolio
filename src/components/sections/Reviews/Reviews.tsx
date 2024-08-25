/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { Moment } from 'moment'

import { useKeenSlider } from 'keen-slider/react'
import getReviewsData from '@/src/services/getReviewsData'

interface ReviewSlide {
  platform: 'Upwork' | 'LinkedIn' | 'Local' | 'Fiverr'
  jobTitle: string
  review: string
  stars: number
  startDate: Moment
  endDate: Moment
  jobType: 'Fixed Price' | 'Weekly Fixed Rate' | 'Hourly Rate'
}

const data = getReviewsData<ReviewSlide[]>()

const Reviews = () => {
  const [sliderRef, _] = useKeenSlider({
    slides: {
      perView: 1,
    },
    breakpoints: {
      '(min-width: 700px)': {
        slides: { perView: 2, spacing: 12 },
      },
    },
    loop: true,
  })

  const makeSlide = (slideDto: ReviewSlide) => {
    return (
      <div
        key={slideDto.jobTitle}
        className='keen-slider__slide p-2 border rounded break-words flex flex-col justify-center'
      >
        <h5 className='text-3xl font-fasthand pb-2'>{slideDto.jobTitle}</h5>
        <p className='pb-2'>
          {slideDto.startDate.format('LL')} - {slideDto.endDate.format('LL')}
        </p>
        <div className='flex items-center gap-3 pb-2'>
          {Array.from(Array(slideDto.stars).keys()).map((index) => (
            <img
              key={index}
              src='/assets/reviews/star.png'
              alt='star'
              width={35}
              height={35}
            />
          ))}
        </div>
        <p className='italic font-bold pb-2'>&quot;{slideDto.review}&quot;</p>
        <p className='rounded-full border w-fit px-3 py-1'>
          {slideDto.platform}
        </p>
      </div>
    )
  }

  return (
    <section
      id='reviews'
      className='px-3 pb-16 transition-colors flex flex-col items-center dark:text-slate-50 dark:bg-slate-950'
    >
      <h2 className='font-fasthand text-7xl pb-7 dark:text-slate-50 z-50'>
        Testimonials
      </h2>

      <div ref={sliderRef} className='keen-slider'>
        {data.map((slideDto) => makeSlide(slideDto))}
      </div>
    </section>
  )
}

export default Reviews
