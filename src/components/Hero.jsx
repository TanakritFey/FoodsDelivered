import React from 'react';

const Hero = () => {

    return (
    <div className='max-w-[1640px] mx-auto p-4'>
         <div className='max-h-[500px] relative'>
            {/* Overlay  บรรทัดที่ 9-12 text อยู่ในภาพ และจัด Position ของ Text */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>  {/* ให้ข้อความ Text เข้ามาอยู่ด้านใน Image */}
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-orange-500'> Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500'>Foods</span> <span> Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/13624261/pexels-photo-13624261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" /> {/* object-cover ให้ภาพขยายเต็ม กล่อง ของ div */}
        </div>
    </div>

    )
}

export default Hero;