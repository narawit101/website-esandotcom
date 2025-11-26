import React from 'react'
import Logo from '../assets/esarndotcom.jpg'

function navbar() {
  return (
    <nav className='bg-[##FFFFFF]'>
      <div className='container mx-auto h-[100px] flex flex-col justify-between  items-center md:flex-row md:px-35'>
        <a href="#">  <img src={Logo} alt="" /></a>
        <ul className='flex flex-row'>
          <li className='m-4'><a href="#">หน้าหลัก</a> </li>
          <li className='m-4'><a href="#">บริการของเรา</a></li>
          <li className='m-4'><a href="#">เกี่ยวกับเรา</a></li>
          <li className='m-4'><a href="#">ติดต่อเรา</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default navbar