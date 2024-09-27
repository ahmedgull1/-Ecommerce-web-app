import React from 'react'

function Sec1() {
    return (
        <div className='w-full h-auto  boder '>
            <h1 className=' w-[90%] mx-auto text-xl py-6 font-bold '>SHOP BY CATEGORY</h1>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10  w-[90%]  mx-auto py-10 ">

                <div className=" flex gap-2 justify-center py-4 ">
                    <div className="table  w-[120px] rounded-full h-[120px] ">
                        <img className='tableimg ' src="/images/table-310x310.jpg" alt="" />
                    </div>
                    <p className='flex flex-col gap-1 py-8  '>

                        <p className=' text-md font-bold  '>Table</p>
                        <p className='text-md text-gray-400'>12 Products</p>
                    </p>
                </div>

                <div className=" flex gap-2 justify-center  py-4   ">
                    <div className="bed  w-[120px] rounded-full h-[120px] ">
                        <img className='bedimg ' src="/images/bed-310x310.jpg" alt="" />
                    </div>
                    <p className='flex flex-col gap-1 py-8  '>

                        <p className=' text-md font-bold  '>Bed</p>
                        <p className='text-md text-gray-400'>5 Products</p>
                    </p>
                </div>

                <div className=" flex gap-2 justify-center   py-4 ">
                    <div className="lamp   w-[120px] rounded-full h-[120px] ">
                    <img className='lampimg ' src="/images/lamp-1-310x310.jpg" alt="" />
                    </div>
                    <p className='flex flex-col gap-1 py-8  '>

                        <p className=' text-md font-bold  '>Lamp</p>
                        <p className='text-md text-gray-400'>7 Products</p>
                    </p>
                </div>

                <div className=" flex gap-2 justify-center  py-4  ">
                    <div className="chair   w-[120px] rounded-full h-[120px] ">
                    <img className='chairimg ' src="/images/chair-1-310x310.jpg" alt="" />
                    </div>
                    <p className='flex flex-col gap-1 py-8  '>
                        <p className=' text-md font-bold  '>Chair</p>
                        <p className='text-md text-gray-400 '>7 Products</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sec1