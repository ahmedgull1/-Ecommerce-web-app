import React from 'react'

function Sec2() {
  return (
    <>
      <div className='  py-6 h-auto  w-[90%] sm:w-[95%]  md:w-[95%] lg:w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6'>
        <div className="lampbrands ">
          <div className=" absolute pt-16 w-[350px] sm:w-[470px] md:w-[470px] lg:w-[470px]">
            <p className=' pt-2  text-4xl  '> Up To 40% Of Top Lamp Brands</p>
            <p className=' pt-2 foxed text-md font-bold hover:underline'>SHOP NOW</p>
          </div>
          <div className="black-lamp   pt-20 w-full h-[400px]">
          </div>
          <div className="banner1 w-full h-[290px] ">
            <div className="banner1img w-full h-[290px] px-10">
              <p className='pt-10 text-md text-gray-500'>NEW PRODUCT</p>
              <p className=' font-bold text-[25px]'>Up To 40% Of Top Lamp Brands</p>
              <p className=' py-2 text-md font-bold hover:underline'>SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className=" banner2 text-white  border">
          <div className="banner2img  w-full h-[690px] pt-10 ">
            <div className="border flex flex-col gap-6 text-center ">
              <p className=' w-full  text-xl '>BIG SALE</p>
              <p className=' w-full  px-28 font-bold text-4xl '>Up To 40% Of Furniture and Decor</p>
              <p className=' w-full   text-lg  font-bold hover:underline'>SHOP NOW</p>
            </div>

          </div>
        </div>
      </div>
      <div className="banner3  w-[95%] h-[200px] mt-6 mx-auto  px-8 py-8">
        <div className="banner3img flex gap-8">

          <h1 className='text-6xl py-8  font-bold'>
            10%
          </h1>
          <p className='py-2'>
            <p className='text-2xl py-4 font-bold '>Get More Pay Less</p>
            <p className=' text-lg '>On orders $500 + Use Coupon Code: <span className='font-bold'>WSD10</span></p>
          </p>
        </div>

      </div>
    </>
  )
}

export default Sec2