// Purpose: Exporting constants for the website.
import {
    mobile,
    playarrow,
    backend,
    creator,
    scheducation,
    web,
    ML,
    carrent,
    jobit,
    tripguide,
    dicoding,
    meta,
    shopify,
    starbucks,
    tesla,
    abouticon,
    certificon,
    projecticon,
    contacticon,
    githubicon,
    linkedinicon,
    igicon,
    crycast,
    firstporto,
    promptworld,
    home,
  } from "@/public/assets";
  
  export const navLinks = [
    {
      link: "https://github.com/AvanFabian",
      title: "Github",
      icon: githubicon,
    },
    {
      link: "https://www.linkedin.com/in/avan-fabian-daniswara-4342b1254/",
      title: "Linkedin",
      icon: linkedinicon,
    },
  ];

  export const sideLinks = [
    {
      id: "hero",
      title: "Home",
      icon: home,
    },
    {
      id: "about",
      title: "About",
      icon: abouticon,
    },
    // {
    //   id: "certification",
    //   title: "Certification",
    //   icon: certificon,
    // },
    {
      id: "project",
      title: "Project",
      icon: projecticon,
      },
    {
      id: "contact",
      title: "Contact",
      icon: contacticon,
    },
  ];
  
  const services = [
    {
      title: "Fullstack Web Development",
      icon: web,
    },
    {
      title: "Data Science & ML",
      icon: ML,
    },
  ];

  const certificate = [
    {
      company: "Dicoding",
      icon: dicoding,
      desc: "Earned [Tech Certificate Name] from [Certification Organization] in [Year]."
    },
    {
      company: "Dicoding",
      icon: dicoding,
      desc: "Earned [Tech Certificate Name] from [Certification Organization] in [Year]."
    },
    {
      company: "Dicoding",
      icon: dicoding,
      desc: "Earned [Tech Certificate Name] from [Certification Organization] in [Year]."
    },
    {
      company: "Dicoding",
      icon: dicoding,
      desc: "Earned [Tech Certificate Name] from [Certification Organization] in [Year]."
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Cry Cast",
      description:
        "Cry Cast is a cryptocurrency prediction platform that uses machine learning to predict the price of cryptocurrency. The website is builded using native Javascript, Bootstrap, Laravel and MySQL as the database and deployed on 000webhost. This project is major assignment in my Web Programming lecture.",
      tags: [
        {
          name: "Team Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://crycast.000webhostapp.com/",
      image: crycast,
      source_code_link: "",
    },
    {
      name: "First React Portfolio Website",
      description:
        "My first portfolio website builded using ReactJS and threeJS for the 3d assets.",
      tags: [
        {
          name: "Personal Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://avanfabian.vercel.app/",
      image: firstporto,
      source_code_link: "",
    },
    {
      name: "PromptWorld",
      description:
        "PromptWorld is a website that provides a platform for writers to share AI Prompt which is relate to particular topic. The website is builded using NextJS, TailwindCSS, and MongoDB as the database.",
      tags: [
        {
          name: "Personal Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://promptworld-danis.vercel.app/",
      image: promptworld,
      source_code_link: "",
    },
    {
      name: "SchEducation",
      description:
        "Final Project of Innovation Management Lecture. SchEducation is simply an school online course, all of material provided by the Teacher there. Builded using NextJS, TailwindCSS, and MongoDB as the database. I'm as a single Developer of this Project and this project still need more development",
      tags: [
        {
          name: "Team Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://sch-education.vercel.app/",
      image: scheducation,
      source_code_link: "",
    },
  ];
  
  export { services, certificate, experiences, projects };