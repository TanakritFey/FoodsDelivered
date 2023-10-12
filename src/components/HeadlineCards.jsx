
const HeadlineCards = () =>{
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl relative">
                {/* OverLay ซ้อนทับ */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">  {/* ทำให้ Overlay ซ้อนกัน ให้ภาพ อาหาร เป็นพื้นหลังของ text และให้ ข้อความ ทับบนรูปภาพ*/}
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
               <img 
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1600" 
               alt="/" />
            </div>

            {/* Card 2 */}
            <div className="rounded-xl relative">
                {/* OverLay ซ้อนทับ */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">  {/* ทำให้ Overlay ซ้อนกัน ให้ภาพ อาหาร เป็นพื้นหลังของ text และให้ ข้อความ ทับบนรูปภาพ*/}
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
               <img 
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/1837755/pexels-photo-1837755.jpeg?auto=compress&cs=tinysrgb&w=1600" 
               alt="/" />
            </div>

            {/* Card 3 */}
            <div className="rounded-xl relative">
                {/* OverLay ซ้อนทับ */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">  {/* ทำให้ Overlay ซ้อนกัน ให้ภาพ อาหาร เป็นพื้นหลังของ text และให้ ข้อความ ทับบนรูปภาพ*/}
                    <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
                    <p className="px-2">Tasty Treats</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
               <img 
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/8024129/pexels-photo-8024129.jpeg?auto=compress&cs=tinysrgb&w=1600" 
               alt="/" />
            </div>
            
        </div>
    )
}
export default HeadlineCards;