import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className="py-3 px-6 w-full flex text-xl font-semibold shadow-md shadow-black items-center justify-between">
      <img src="https://aul.edu.ng/students/storage/photo/logo.png" alt="" className='h-12' />
      <div className="flex gap-8">
        <NavLink>Testimonies</NavLink>
        <NavLink>Share your testimony</NavLink>
      </div>
    </div>
  );
}
