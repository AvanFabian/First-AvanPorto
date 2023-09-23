'use client'
// import { motion } from "framer-motion"
import { useState } from 'react'
import { sideLinks } from '@/constants'
import Image from 'next/image'

const Hero = () => {
  const [active, setActive] = useState(''); // set active to empty string
  return (
    <section className="relative w-full h-screen
    mx-auto items-center">
      <div className='sm:px-16 px-6 absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5'>
        { /* div below is for the text */ }
          <div>
          { /* &apos; is for escaping ' sign */ }
            <h1 className='heroHeadText'>Hi, I&apos;m <span 
            className="text-[#f8f3f2]">Fabian</span></h1>
            <p className='heroSubText mt-2
            text-[#949191]'>
              I develop a&nbsp;Fullstack Web and <br />Mobile Apps
              <br className="sm:block hidden"/>
            </p>
          </div>
        </div>
        <div className=''>
          <ul className='list-none px-2 py-6 top-[219px] right-0 my-2  
          z-10 flex justify-end rounded-tl-xl rounded-bl-xl
          items-start flex-col gap-8 fixed bg-[#0607149a]'> 
            {sideLinks.map((link) => (
              <li
                key={link.id} // key is for unique identifier
                className={`${
                  // active state value is getting from useState
                  active === link.title // if active is equal to link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => { 
                  setActive(link.title)} // set active to link.title
                }
                >
                <a href={`#${link.id}`}> 
                  {link.icon} 
                </a> 
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Hero