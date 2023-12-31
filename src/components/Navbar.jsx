import {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'   // เรียก Button Cart มาใช้
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends , FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'


const Navbar = () => {
  const [nav,setNav] = useState(false);    // useState สำหรับ set ตัว menu navbar ด้านซ้าย ให้คลิก ปุ่ม แล้วเปิด-ปิด navbar menu ได้ , ค่าเริ่มต้น = false
    return (
    <div className='max-w-[1640px] mx-auto justify-between items-center p-4 flex'>
        {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>      {/* เมื่อเราคลิ้ก จะเปิดและปิด Navbar menu , setNav คือ !nav ให้ทำงานตรงกันข้ามกับค่าเริ่มต้นที่เปลี่ยน false เป็น true */}
          <AiOutlineMenu size={30} /> {/* icon navbar ขวา */}
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          |onely <span className='font-bold'>Mart</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>  {/* เมื่อต่ำกว่าขนาดจอ 1024px จะซ่อน  */}
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div> 
        {/* Search Input */}
      </div>

      {/* Search Input */}
      
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>       
        <input className='bg-transparent p-2 w-full focus:outline-none' 
        type="text" 
        placeholder='Search Products' />  {/* bg-transparent จากกล่องสีขาว input ให้เป็นพื้นหลังสีเดียวกับ <div> และ ลบ focus เวลาเอาเมาส์ไปคลิกไม่แสดงเส้นขอบ*/}
      </div>

      <button className='bg-black text-white hidden md:flex items-center py-2'>
        {/* button Cart รถเข็น เลือกสินค้น */}
        <BsFillCartFill size={20}/>Cart
        </button>

      {/* Mobile */}
      {/*  Overlay ให้แสดงก็ต่อเมื่อ กำหนดเงื่อนไข State nav สถานะของเป็น true , ถ้า nav เป็น true จะให้แสดง nav menu ออกมา ถ้าเป็น false ให้แสดง ค่าว่าง */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }  {/* If Condination Overlay */}

      {/* Side drawer menu */}
      {/* Side drawer ดึง State Nav มาใช้ กำหนดเงื่อนไข เพื่อแสดงผล  , left-[100%] คือ ซ่อนไว้นอกหน้าจอ*/}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>  {/* duration กำหนดระยะเวลาแสดง Animation , z-10 กำหนดค่า z-index ควบคุม layer ที่มีหลายชั้น fixed ให้ navmenu ติดอยู่ที่ตำแหน่ง ไม่เคลื่อนตามเวลาเราเลื่อนเว็บ , w-300px กำหนดความกว้างของ div */}
     
      <AiOutlineClose 
      onClick={()=> setNav(!nav)}  /* ใช้ UseState setNav ให้กับ nav เมื่อกดคลิ้กอีกครั้งจะเป็นการ ปิด Nav Menu */
      size={30} 
      className='absolute right-4 top-4 cursor-pointer' />    {/* เพิ่ม icon tab ปุ่ม X เมนูด้านซ้าย และปรับให้อยู่ด้านมุมขวาสุด */}   

      <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>   
      {/* สร้าง menu สำหรับเลือก */}
      <nav>
        <ul className='flex flex-col p-4 text-gray-800'>  {/* ให้ tag <li> เป็น column เปลี่ยนสี text */}
          <li className='text-xl py-4 flex'> <TbTruckDelivery size={25} className='mr-4' /> Orders</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <MdFavorite size={25} className='mr-4' /> Favorites</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <AiFillTag size={25} className='mr-4' /> Promotion</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <BsFillSaveFill size={25} className='mr-4' /> Best Ones</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <FaWallet size={25} className='mr-4' /> Wallet</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <FaUserFriends size={25} className='mr-4' /> Invite Friends</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
          <li className='text-xl py-4 flex'> <MdHelp size={25} className='mr-4' /> Help</li> {/* เพิ่ม Icon รถ Delivery ให้อยู่บรรทัดเดียวกัน ข้อความ */}
        </ul>
      </nav>
      </div>

      

    </div> 

    );
}
export default Navbar;