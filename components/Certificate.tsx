'use client'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { certificate } from '@/constants'
import { SectionWrapper } from '@/hoc'

import Image from "next/image"

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface CertificateCardProps {
  index: number
  company: string
  icon: StaticImageData
  desc: string
}
const CertificateCard = ({ index, company, icon, desc}: CertificateCardProps) => {
    return (
      <div >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl
          sm:w-[350px] w-full"
        >
          <div className="relative w-full h-[230px]">
          <Image 
            src={icon}
            alt={company}
            className="w-full h-full object-fit rounded-2xl"
          />
          </div>
  
          {/* BELOW IS FOR NAME AND DESCRIPTION OF THE PROJECT */}
          <div className="mt-5">
            <h3 className="text-white font-bold
            text-[24px]">{company}</h3>
            <p className="mt-2 text-secondary
            text-[14px]">{desc}</p>
          </div>
        </Tilt>
      </div>
  )}

const Certificate = () => {
  return (
    <>
      <div >
        <p className='sectionSubText'
        >Certificate</p>
        <p className='sectionHeadText'
        >Certification</p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {certificate.map((certif, index) => (
          // key purpose in below case is 
          // to tell react which element to update
          <CertificateCard key={certif.company}
            index={index} {...certif} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Certificate, 'certification');