import React from 'react'
import SeviceImg01 from '../assets/service01.avif'
import SeviceImg02 from '../assets/service02.avif'
import SeviceImg03 from '../assets/service03.avif'
import SeviceImg04 from '../assets/service04.avif'



function Services() {
    return (
        <div className='container mx-auto max-w-[1320px] my-10'>

            <h2 className='text-[25px] text-center my-4'>บริการของเรา </h2>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='shadow-lg p-10 rounded-md text-center'>
                    <img className='object-cover w-[1000px] p-2' src={SeviceImg01} alt="" />
                    <p>บริการพัฒนาโปรแกรมสำหรับองค์กรและธุรกิจ</p></div>
                <div className='shadow-lg p-10 rounded-md text-center'>

                    <img className='object-cover w-[1000px] p-2' src={SeviceImg02} alt="" />
                    <p>ออกแบบเว็บไซต์เชิงธุรกิจ เว็บไซต์ตอบโจทย์ลูกค้า </p>
                </div>
                <div className='shadow-lg p-10 rounded-md text-center'>

                    <img className='object-cover w-[1000px] p-2' src={SeviceImg03} alt="" />
                    <p>ระบบบริหารลูกค้า บริหารการขาย ระบบลูกค้าสัมพันธ์ CRM</p>
                </div>
                <div className='shadow-lg p-10 rounded-md text-center'>

                    <img className='object-contain h-[150px] w-[1000px] p-2' src={SeviceImg04} alt="" />
                    <p>ออกแบบจัดทำแอปพลิเคชัน iOS, Android</p>
                </div>
            </div>

        </div>
    )
}

export default Services