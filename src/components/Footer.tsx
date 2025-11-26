import React from 'react'
import { useState } from 'react';

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    const sentMessage = () => {


        alert(
            `ส่งข้อความเรียบร้อย!\n\n` +
            `ชื่อ: ${name}\n` +
            `อีเมล: ${email}\n` +
            `หัวข้อ: ${topic}\n` +
            `ข้อความ: ${message}`
        );
        setEmail('');
        setName('');
        setTopic('');
        setMessage('');
    };
    return (
        <div>
            <div className='flex flex-row  p-10  justify-center items-center gap-[100px] bg-[#f3f4f6]'>
                <div className='flex flex-col gap-4'>
                    <h2>ชั้น 2 อาคารอุทยานวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น </h2>
                    <h2>0942646926 </h2>
                    <h2>webmaster@esarn.com </h2>
                </div>
                <div >
                    <form className='flex flex-col gap-4' onSubmit={sentMessage}>
                        <label htmlFor="">ชื่อของคุณ (ต้องการ)
                            <input type="text"
                                className='border-2 rounded-md'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="" id="" />
                        </label>
                        <label htmlFor="">อีเมล์ของคุณ (ต้องการ)
                            <input type="email"
                                className='border-2 rounded-md'

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="" id="" />
                        </label>

                        <label htmlFor="">หัวข้อ
                            <input type="text"
                                className='border-2 rounded-md'

                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                name="" id="" />
                        </label>

                        <label htmlFor="">ข้อความของคุณ
                            <textarea
                                className='border-2 rounded-md'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="" id="" />
                        </label>

                        <button
                            className='border-2 rounded-md'
                            type="submit">ส่ง</button>

                    </form></div>
            </div>
        </div>
    )
}

export default Footer