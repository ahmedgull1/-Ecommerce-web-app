import React from 'react'

function Navbar() {
    return (
        <div className='main w-full h-auto '>
            <div className='flex justify-between z-10 top-0 fixed shadow-md bg-white w-[100%] px-10'>

                <ul className=' flex px-2 py-8 gap-6'>
                    <li className='text-lg cursor-pointer text-gray-400'><i class="fa-solid fa-bars"></i></li>
                    <li className='text-lg cursor-pointer text-gray-400'><i class="fa-solid fa-magnifying-glass"></i></li>
                </ul>
                <ul className='pt-8 '>
                    <img className='w-full  h-[30px] sm:h-[30px] md:h-[30px] lg:h-[30px] sm:w-[140px] md:w-[140px] lg:w-[140px]  cursor-pointer ' src="/images/logo.png" alt="" />
                </ul>
                <ul className=' flex px-2  py-8 gap-4'>
                    <li className='text-lg cursor-pointer text-gray-500'><i class="fa-solid fa-id-badge"></i></li>
                    <li className='text-lg cursor-pointer text-gray-500'><i class="fa-regular fa-heart"></i></li>
                    <li className='text-lg cursor-pointer text-gray-500'><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar