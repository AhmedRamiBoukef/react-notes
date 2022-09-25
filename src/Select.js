

import React from 'react'

import { Link } from "react-router-dom";

export const Select = () => {
  return (
    <div className="Select ">
        <Link to="/" className='bg-[#337AB7] text-white px-[12px] py-[6px] inline-block rounded-l border hover:grayscale-[40%] '>All</Link>
        <Link to="/Active" className='bg-white text-black px-[12px] py-[6px] inline-block border hover:grayscale-[40%]'>Active</Link>
        <Link to="/Completed" className='bg-white text-black px-[12px] py-[6px] inline-block rounded-r border hover:grayscale-[40%]'>Completed</Link>
    </div>
  )
}
