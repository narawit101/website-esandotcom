import React from 'react'
import BannerImg from '../assets/banner.jpg'


function Banner() {
    return (
        <div className='container mx-auto max-w-[1320px]'>
            <div className='flex flex-col my-5 mx-10 md:flex-row gap-10'>
                <img src={BannerImg} alt="Banner" className='w-[600px] rounded-md' />
                <div className='m-4 flex flex-col justify-center'>
                    <h1>ผู้ให้บริการพัฒนาเว็บไซต์ <br /> และโซลูชันดิจิทัลครบวงจร</h1>
                    <p className='font-light'>บริการออกแบบเว็บไซต์ ปรับปรุงระบบ และพัฒนาโปรแกรมบริหารงานธุรกิจ <br /> ตามความต้องการขององค์กร</p>
                </div>
            </div>
        </div>
    )
}

export default Banner