import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={' Us'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae quae maxime ab officia exercitationem dolore quidem iusto fugit architecto magnam sunt dolorum praesentium amet, mollitia libero ex soluta dolores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, repudiandae!</p>
        <b className='text-gray-800 '>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium qui molestias voluptatibus alias fugiat incidunt.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'Why' } text2={' CHOOSE US' }></Title>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias aspernatur at, sequi dolore pariatur dicta magnam aut non illo?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias aspernatur at, sequi dolore pariatur dicta magnam aut non illo?</p>
        </div>
          
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias aspernatur at, sequi dolore pariatur dicta magnam aut non illo?</p>
        </div>

      </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default About