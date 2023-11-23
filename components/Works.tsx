'use client'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { github } from "@/public/assets"
import { SectionWrapper } from "@/hoc"
import { projects } from "@/constants"

import Image from "next/image"

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: any;
  demologo: string;
  demourl: string;
  image: StaticImageData;
  source_code_link: string;
}

const ProjectCard = ( {index, name, description,
tags, demologo, demourl, image, source_code_link}: ProjectCardProps ) => {
  return (
    <div className="flex flex-col mx-auto lg:mx-0">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] mx-auto h-full w-full"
      >
        <div className="relative w-full h-[230px] transition-all">
          <Image 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* We want something to be appear on top of the image  */}
        <div className="absolute inset-0 flex
        justify-end m-3 card-img_hover">
          {/* BELOW IS FOR GITHUB LINK */}
          <div
            onClick={() => window.open(demourl, "_blank")}
            className="black-gradient w-10 h-10 rounded-full
            flex justify-center mr-2 items-center cursor-pointer"
          >
            <Image 
              src={demologo}
              alt="playarrow"
              className="w-1/2 h-1/2 object-contain bg-[#ffffff] rounded-full"
            />
          </div>
          {/* BELOW IS FOR LIVE DEMO LINK */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer"
          >
            <Image 
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        {/* BELOW IS FOR NAME AND DESCRIPTION OF THE PROJECT */}
        <div className="mt-5 mb-5">
          <h3 className="text-white font-bold
          text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary
          text-[14px]">{description}</p>
        </div>

        {/* BELOW IS FOR TECH STACK */}
        <div className="flex flex-wrap gap-2 absolute bottom-[20px]">
          {/* Map the tags */}
          {tags.map((tag: any) => (
            <p key={tag.name} className={`text-[14px]
            ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
)}

const Works = () => {
  return (
    <>
      <div >
        <p className='sectionSubText'>
          My Work
        </p>
        <h2 className='sectionHeadText'>
          My Projects.
        </h2>
      </div>

      <div className="w-full flex">
        <p
        // The 2 empty "", it's the direction of transition
        // 0.1 is the animation delay and 1 is the duration
          // max-w-3xl is the max width of the text
          className="mt-3 text-secondary text-[17px]
           max-w-3xl leading-[30px]"
        >
          As a student, I am eager to learn and grow in the field of web development.&nbsp;
          I am excited to bring my creativity and problem-solving skills to real-world projects.&nbsp;
          Throughout my university studies, I have gained a strong foundation in computer science,&nbsp;
          programming languages, and software development methodologies, 
          which I apply to every project I undertake.&nbsp;
          <span className="text-white font-black">
            Click the Play icon to demo!
          </span>
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          // index result is: 0, 1, 2, 3, 4, 5
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              // {...project} is the same as:
              // name={project.name}, image={project.image}, etc.
              {...project}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'project')