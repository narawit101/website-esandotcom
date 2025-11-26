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
            <div className='flex flex-col gap-4 p-10 border-2 justify-between'>
                <div className='flex flex-col gap-4'>
                    <h2>ชั้น 2 อาคารอุทยานวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น </h2>
                    <h2>0942646926 </h2>
                    <h2>webmaster@esarn.com </h2>
                </div>
                <div className='flex flex-row gap-4'>
                    <form onSubmit={sentMessage}>
                        <label htmlFor="">ชื่อของคุณ (ต้องการ)
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="" id="" />
                        </label>
                        <label htmlFor="">อีเมล์ของคุณ (ต้องการ)
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="" id="" />
                        </label>

                        <label htmlFor="">หัวข้อ
                            <input type="text"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                name="" id="" />
                        </label>

                        <label htmlFor="">ข้อความของคุณ
                            <input type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="" id="" />
                        </label>

                        <button type="submit">ส่ง</button>

                    </form></div>
            </div>
        </div>
    )
}

export default Footer