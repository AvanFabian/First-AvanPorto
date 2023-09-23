'use client'
import { useState } from 'react' 
import Link from 'next/link'
// Image next
import Image from 'next/image'
// code above is link component from react-router-dom
import { navLinks } from '@/constants';
import { fabian, menu, close } from '@/public/assets';

const Navbar = () => {
  const [active, setActive] = useState(''); // set active to empty string
  const [toggle, setToggle] = useState(false); // set toggle to false
  return (
    <nav 
      className='paddingX w-full flex relative
      items-center py-[8px] top-0 z-20 bg-transparent'
    >
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>
      { /* Link is for routing */ }
        <Link
          href="/" // to is for destination
          className='flex items-center gap-2'
          onClick={() => { // when clicked
            setActive(""); // set active to empty string
            window.scrollTo(0, 0); // scroll to top when clicked
          }}
        >
          <Image src={fabian} alt="fabian" className='w-12 h-12 rounded-full' />
          <p className='text-white text-[18px] 
          font-bold cursor-pointer flex'>
            Avan&nbsp;|&nbsp;Fabian
          </p>
        </Link>
        { /* sm:flex is too show the menu when screen size is 640px and above */ }
        <ul className='list-none hidden lg:flex
        flex-row gap-10'> 
        {/* bg-white rounded-full px-3 py-2 rotate-90 */}
          {navLinks.map((link) => (
            <li
              key={link.id} // key is for unique identifier
              className={`${
                // active state value is getting from useState
                active === link.title // if active is equal to link.title
                  ? "text-[#f5f5f7]"
                  : "text-[#231F20]"
              } hover:text-[#beb9b9] text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(link.title)} // set active to link.title
              >
              <a href={`#${link.id}`}> {link.title} </a> 
            </li>
          ))}
        </ul>
        { /* div below is for mobile screen */ }
        <div className='lg:hidden flex flex-1
        justify-end items-center'>
          <Image
            src={toggle ? close : menu} // if toggle is true, show close icon, else show menu icon
            alt="menu"
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            {/* if toggle is true, show menu, else show nothing */}
            <div className={`${!toggle ? "hidden"
              : "flex" } p-6 black-gradient absolute 
              top-20 right-0 mx-4 my-2 min-w-[140px] 
              z-10 rounded-xl`}>
              <ul className='list-none flex justify-end
              items-start flex-col gap-4'> 
                {navLinks.map((link) => (
                  <li
                    key={link.id} // key is for unique identifier
                    className={`${
                      // active state value is getting from useState
                      active === link.title // if active is equal to link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium text-[16px] cursor-pointer`}
                    onClick={() => { 
                      setToggle(!toggle); // set toggle to opposite value
                      setActive(link.title)} // set active to link.title
                    }
                    >
                    <a href={`#${link.id}`}> {link.title} </a> 
                  </li>
                ))}
              </ul>
            </div>
        </div>
        { /* div above is for mobile screen */ }
      </div>
    </nav>
  )
}

export default Navbar