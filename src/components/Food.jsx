import { data } from './data/data.js'     // ดึงข้อมูลจาก Api จำลองที่สร้างในไฟล์ data.js เข้ามาใช้
import { useState } from 'react'

const Food =() => {
    
    // useState ตัวแปร foods ให้เก็บค่าเริ่มต้นเป็น data ที่เราดึงข้อมูลจาก Folder data หรือ ดึง API มาใช้ map ค่า แสดงข้อมูลรายการอาหารทั้งหมด และ Filter กรองข้อมูลใช้ ค้นหา food , price
    const [foods,setFoods] = useState(data)

    // ขั้นตอนเกือบสุดท้าย : Filter Type burgers/pizza/etc... นำไปใช้กับ Button เมื่อเราทำการกดคลิก onClick
    const filterType = (category) => {
        setFoods(
            // ดึง Data จากไฟล์ data.js มา Filter ข้อมูล
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // ขั้นตอนเกือบสุดท้าย :  Filter Price นำไปใช้กับ Button เมื่อเราทำการกดคลิก onClick
    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=> {
                return item.price === price;
            })
 
            )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Fliter Row */}
            <div className='flex flex-col lg:flex-row justify-between'> {/* ขยายหน้าจอมากกว่า 1024 ตัว Filter ที่ใช้ค้นหา Filter Type , Filter Price จะเป็น แนวนอน อยู่บรรทัดเดียวกัน แต่ถ้าขนาดเล็กกว่า 1024px จะให้แสดง Filter เป็น Column Type, Price อยู่คนละบรรทัด */}
                
                {/* Fliter Type ที่อยู่ใน div ของ Fliter Row  คือ ใช้ค้นหา ชนิดของอาหาร */}
                <div>
                    <p className='font-bold text-gray-700'>Fliter Type</p>
                    <div className='flex justify-between flex-wrap'> {/* wrap: การกำหนดให้ Flex Item มีการดันลงมาด้านล่างตามขนาดของ Flex Container โดยมีการจัดเรียง Flex Item จากบนลงล่าง */}
                        {/* hover คือ เมื่อนำ เม้าส์ มาวาง จะให้แสดงเป็น Background สีส้ม แต่ถ้าไม่มีการนำ เม้าส์ มาวาง จะให้เป็น Bg สีขาว */}
                        <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button> {/* เมื่อเรากด button คลิกเข้าไป จะให้แสดง รายการอาหารทั้งหมด ที่ดึงข้อมูลมาจาก data.js หรือ ดึงจาก API */}
                        <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* fliter Price อยุ่ใน div Fliter Row คือ ค้นหา ราคา */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'> {/* ให้ปุ่ม กับ <div> กล่องที่ครอบ ให้ใช้ Style เหมือนกับ Filter Type */}
                        <button onClick={()=>filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
        
        {/* Display Foods จะใช้ map() ในการแสดงข้อมูล Foods ทั้งหมดที่เราดึงมากจาก data หรือ ถ้าใช้จริงๆจะดึงจาก API ของข้อมูลอาหาร แล้วนำมา map ค่าต่อเพื่อแสดงเมนูอาหารทั้งหมด */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4' > {/* ถ้าเป็น หน้าจอขนาด lg จะแสดง เป็น 4 column  */}
            {/* ใช้ useState ในการเก็บ ข้อมูล และ setState */}
            {foods.map((item,index) => (
                <div key={index} className='border shadow-lg hover:scale-105 duration-300'> {/* ปรับ Style ของ Card ที่ map ค่าเข้ามา และ hover:scale-105 เมื่อนำเม้าส์มาวางจะให้ image ขยายใหญ่ขึ้น เพื่อแสดงว่าเป็นการเลือกภาพนั้นอยู่ , duration-300 ให้ภาพมันมีการแสดงแบบ สมูท มากขึ้นเมื่อนำเม้าส์ไปวาง */}
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg '
                    />

                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p1 rounded-full'>{item.price}</span>
                        </p>
                    </div>

                </div>
            ) )}
        </div>

        </div>
    )
}

export default Food