import React from 'react'

function Sec0() {
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  w-[93%] h-auto mx-auto  py-10 ">
                <div className="flex flex-col  py-40 w-[100%] sm:w-[50%] md:w-[100%] lg:w-[100%]  ">
                    <p className='font-inter text-xl w-full'>SALE OF 30%</p>
                    <p className='font-Inter text-[52px]  w-full sm:w-[100%] md:-[100%] lg:w-[100%]'>Chairs & Seating You'll Love</p>
                    <p className=' text-[20px]'>Designer chair styles for every space-shiping</p>
                    <p className=' mt-6 font-bold  hover:underline'>SHOP NOW</p>
                </div>
                <div className="mainchair px-6 py-16   ">
                    <div className="mainchairimg w-[50%]  h-[300px] md:w-[100%] md:h-[400px] lg:w-[90%] lg:h-[400px] mx-auto">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec0;