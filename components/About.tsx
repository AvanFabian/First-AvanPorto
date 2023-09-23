'use client'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/utils/styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import Image from 'next/image'

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {

  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='xs:w-[250px] w-full'>
      { /* motion.div mean that we want to animate a div */}
      <motion.div
        // spring is an animation that has a bounce effect
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px]
         rounded-[20px] shadow-card'
      >
        <div
          className='bg-[#1c1a1a] rounded-[20px] flex
           py-5 px-12 min-h-[280px] justify-evenly items-center flex-col'>
            
          <Image src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(fadeIn('up', '', 0, 1))}>
        <p className='sectionSubText'
        >Introduction</p>
        <h2 className='sectionHeadText'
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        I am a student at the Universitas Negeri Malang, East Java, where I am majoring in computer science.&nbsp;
        I am passionate about web development and UI/UX design, and I have been working on a number of personal projects&nbsp;
        and university team projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          // key purpose in below case is 
          // to tell react which element to update
          <ServiceCard key={service.title}
            index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')