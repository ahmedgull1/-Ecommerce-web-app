import React from 'react'

function Footer() {
    return (
        <>
            <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3  gap-4 w-[80%] mx-auto py-10'>
                <div className=" py-2">
                    <ul className=''>
                        <li className='py-2'>
                            <img className='w-[50%] h-18 ' src="/images/logo.png" alt="" />
                        </li>
                        <li className='pt-4 text-lg text-gray-500'>Text: +00(234)23-45-666</li>
                        <li className='pt-2 text-lg text-gray-500'>Mon – Fri: 8 am – 8 pm</li>
                        <li className='pt-2 text-lg text-gray-500'>Sat – Sun: 8 am – 7 pm</li>
                    </ul>
                </div>
                {/* <div className="">
                    <ul className=''>
                        <li className='pt-4 font-bold text-xl'>ABOUT
                        </li>
                        <li className='pt-4 text-lg text-gray-500'>Our Story
                        </li>
                        <li className='pt-2 text-lg text-gray-500'>Careers </li>
                        <li className='pt-2 text-lg text-gray-500'>Influencers</li>
                        <li className='pt-2 text-lg text-gray-500'>Join our team</li>
                    </ul>
                </div> */}
                <div className="">
                    <ul className=''>
                        <li className='pt-4 font-bold text-xl'>CUSTOMER SERVICES </li>
                        <li className='pt-4 text-lg text-gray-500'>Contact US
                        </li>
                        <li className='pt-2 text-lg text-gray-500'>Customer Servicess </li>
                        <li className='pt-2 text-lg text-gray-500'>find Store</li>
                        <li className='pt-2 text-lg text-gray-500'>Book Appointment</li>
                        <li className='pt-2 text-lg text-gray-500'>Shipping and Returns</li>
                    </ul>
                </div>
                <div className=" ">
                    <ul className='w-full '>
                        <li className='pt-4 font-bold text-xl'>SIGN UP FOR EMAILS</li>
                        <li className='pt-4 text-xl text-gray-500'>Enjoy 15% off* your first order when sign up to our newsletter
                        </li>
                        <li className='py-4 text-2xl flex text-gray-500 w-[100%] '>
                            <input className='py-3 bg-gray-300 px-4 w-[100%] text-white  text-sm ' type="text" placeholder='Your e-mail address' /><button className='   text-sm  bg-black text-white font-bold px-4'>SUBSCRIBE</button> 
                            </li>
                        <li className='flex gap-4'> 
                            <li className='py-2 hover:text-red-500 cursor-pointer text-xl text-gray-500'><i class="fa-brands fa-facebook"></i></li>
                            <li className='py-2 hover:text-red-500 cursor-pointer text-xl text-gray-500'><i class="fa-brands fa-twitter"></i></li>
                            <li className='py-2 hover:text-red-500 cursor-pointer text-xl text-gray-500'><i class="fa-brands fa-pinterest"></i></li>
                            <li className='py-2 hover:text-red-500 cursor-pointer text-xl text-gray-500'><i class="fa-brands fa-snapchat"></i></li>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className=' w-[93%] mx-auto' />
            <div className=" flex-col flex gap-10 lg:flex-row md:flex-row justify-between w-[88%] mx-auto py-8 list-none">
                <li className=' text-gray-400 text-md flex gap-6 '>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                    <li>FAQs</li>
                </li>
                <li className=' text-gray-400 text-md '>© Nooni.  Rightsspan  Reserved.</li>
                <li className='pt-2 '>
                    <img src="/images/payment.png" alt="" />
                </li>
            </div>
        </>

    )
}

export default Footer