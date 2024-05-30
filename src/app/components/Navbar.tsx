import Image from 'next/image'
import React from 'react'
import hamburgIcon from "../../../public/hamburgIcon.svg"
import leaf from "../../../public/leaf.svg"

const Navbar = () => {
  return (
    <div className='bg-[#00241C] text-white relative'>
      <div className='absolute top-5 left-5'>
        <Image
          src={leaf}
          alt='hamburg'
          width={50}
          height={50}
        />
      </div>

      <nav className='sm:flex justify-between items-center p-2 sm:p-5 px-5 sm:px-10 pl-20 hidden'>
        <ul className='flex gap-10 justify-center items-center'>
          <h1 className='text-xl mr-3 sm:mr-10'>CPMP</h1>
          <li className='bg-black py-2 px-4 rounded-lg'>Home</li>
          <li>Explore and Search</li>
          <li>Curate</li>
          <li>Upload Your Data</li>
          <li>Contact Us</li>
        </ul>
        <button className='border-2 p-2 px-5 rounded-full'>My Account</button>
      </nav>

      <nav className='flex justify-between items-center p-5 px-10 pl-20 sm:hidden'>
        <ul className='flex gap-10 justify-center items-center'>
          <h1 className='text-xl'>CPMP</h1>
        </ul>
        <div className='flex justify-center items-center gap-5'>
          <button className='border-2 p-2 px-2 sm:px-5  rounded-full'>My Account</button>
          <div className=''>
            <Image
              src={hamburgIcon}
              alt='hamburg'
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
