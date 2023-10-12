import { useState } from 'react'
import { categories } from './data/data' /* เอาข้อมูลใน ไฟล์ data.js ที่มีตัวแปร categories เก็บข้อมูล หมวดหมู่ ของอาหารอยู่ */

const Category = () => {
    console.log(categories);
    const [category , setCategory] = useState(categories); /* ดึงข้อมูลจาก data.js ตัวแปร categories นำมาใช้ map() ข้อมูลออกมาแสดงให้เป็น หมวดหมู่ของอาหาร  */
    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Categories */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {category.map((item,index) =>{
                    return (
                        <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                            <img src={item.image} alt={item.name}
                            className='w-20'
                            />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Category