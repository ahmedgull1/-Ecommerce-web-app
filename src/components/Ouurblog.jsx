import React from 'react'

function Ouurblog() {
    return (
        <>
            <h1 className='w-[95%] mx-auto text-2xl py-6 font-bold'>OUR BLOG</h1>
            <div className=' w-[95%] h-auto mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  '>
                <div className="Blog1  w-[100%] h-[450px]  ">
                    <img className='img' src="/images/blog-1-1174x862.jpg" alt="" />
                </div>
                <div className=" w-full  grid grid-cols-1 lg:grid-cols-2  ">
                    <div className=" w-[100%] px-4 flex flex-col py-6 ">
                        <p className=' hover:text-red-500 cursor-pointer py-2 text-md text-gray-400'>FURNITURE, TABLE</p>
                        <p className=' hover:text-red-500 cursor-pointer text-[30px]'>To Scrites Living  Room that Draws You In </p>
                        <p className=' py-2 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, deserunt</p>
                        <p className=' py-2 cursor-pointer text-md font-bold hover:underline '>READ MORE</p>
                    </div>
                    <div className="blog2 w-[50%] sm:w-[100%] h-[450px]  ">
                        <img className='' src="/images/blog-2-1174x862.jpg" alt="" />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Ouurblog