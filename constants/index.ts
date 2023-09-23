// Purpose: Exporting constants for the website.
import {
    mobile,
    playarrow,
    backend,
    creator,
    web,
    carrent,
    jobit,
    tripguide,
    dicoding,
    meta,
    shopify,
    starbucks,
    tesla,
  } from "@/public/assets";
  
  import MdPermIdentity from "react-icons/md"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "certification",
      title: "Certification",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const sideLinks = [
    {
      id: "about",
      icon: "About",
    },
    {
      id: "certification",
      icon: "Certification",
    },
    {
      id: "project",
      icon: "Project",
    },
    {
      id: "contact",
      icon: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Web Development",
      icon: web,
    },
    {
      title: "UI & UX Design",
      icon: mobile,
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Jentara",
      description:
        "Web-based platform that allows users to search, learn, and configuring Indonesia cultures.",
      tags: [
        {
          name: "Team Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://github.com/",
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cry Cast",
      description:
        "Cry Cast is a cryptocurrency prediction platform that uses advanced machine learning techniques to help users make profitable investments. The platform combines real-time data and expert analysis to classify and predict market trends with high accuracy.",
      tags: [
        {
          name: "Team Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://github.com/",
      image: jobit,
      source_code_link: "https://github.com/AvanFabian/cry-cast.git",
    },
    {
      name: "Realtime Message",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Personal Project",
          color: "",
        },
      ],
      demologo: playarrow,
      demourl: "https://github.com/",
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, certificate, experiences, testimonials, projects };