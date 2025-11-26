import React from 'react'
import Client01 from '../assets/client01.jpg'
import Client02 from '../assets/client02.jpg'
import Client03 from '../assets/client03.jpg'
import Client04 from '../assets/client04.jpg'
import Client05 from '../assets/client05.jpg'
import Client06 from '../assets/client06.jpg'
import Client07 from '../assets/client07.jpg'
import Client08 from '../assets/client08.jpg'


function Client() {
    return (
        <div className='container mx-auto max-w-[1320px] my-10'>
            <div>
                <h2 className='text-[25px] text-center '>ลูกค้าที่ไว้วางใจเรา </h2>
                <div className='grid grid-cols-4 justify-between items-center gap-10'>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client01} alt="" />
                        <h2 className='text-center mb-4'>SCGSM</h2>
                        <p>วิทยาลัยบัณฑิตศึกษาการจัดการ มหาวิทยาลัยขอนแก่น</p>
                    </div>

                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client02} alt="" />
                        <h2 className='text-center mb-4'>สสว.</h2>
                        <p>สำนักงานส่งเสริมวิสาหกิจขนาดกลางและขนาดย่อม</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client03} alt="" />
                        <h2 className='text-center mb-4'>Science Park KKU</h2>
                        <p>สำนักงานอุทยานวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client04} alt="" />
                        <h2 className='text-center mb-4'>Khon Kaen Hotel</h2>
                        <p>โรงแรมขอนแก่นโฮเต็ล จังหวัดขอนแก่น</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client05} alt="" />
                        <h2 className='text-center mb-4'>Regional Environmental Office</h2>
                        <p>สำนักงานสิ่งแวดล้อมภาคที่ 10 จังหวัดขอนแก่น</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client06} alt="" />
                        <h2 className='text-center mb-4'>Department of Water Resources</h2>
                        <p>กรมทรัพยากรน้ำ กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client07} alt="" />
                        <h2 className='text-center mb-4'>Department of Highways</h2>
                        <p>กรมทางหลวงกระทรวงคมนาคม</p>
                    </div>
                    <div className='shadow-lg p-10 rounded-md '>
                        <img className='object-cover w-[1000px] p-2' src={Client08} alt="" />
                        <h2 className='text-center mb-4'>Security and traffic office KKU</h2>
                        <p>สำนักงานรักษาความปลอดภัยและการจราจร มหาวิทยาลัยขอนแก่น</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client