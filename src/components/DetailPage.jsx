import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Magnifier from "react-magnifier";
import { useParams } from "react-router-dom"
import Relatedproducts from './Relatedproducts';
import Footer from './Footer';

function DetailPage() {

    const params = useParams();
    const [data, setData] = useState({});


    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            setData(data)
        }

        fetchProduct()
    }, []);
    return (
        <>
            <div className='main w-full h-auto '>
                <div className='flex justify-between z-10 top-0 fixed shadow-md bg-white w-[100%] px-10'>

                    <ul className=' flex px-2 py-8 gap-6'>
                        <li className='text-lg cursor-pointer text-gray-400'><i class="fa-solid fa-bars"></i></li>
                        <li className='text-lg cursor-pointer text-gray-400'><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                    <ul className=' px-10 py-6'>
                        <img className='w-[140px] h-[30px] cursor-pointer ' src="/images/logo.png" alt="" />
                    </ul>
                    <ul className=' flex px-2  py-8 gap-4'>
                        <li className='text-lg cursor-pointer text-gray-500'><i class="fa-solid fa-id-badge"></i></li>
                        <li className='text-lg cursor-pointer text-gray-500'><i class="fa-regular fa-heart"></i></li>
                        <li className='text-lg cursor-pointer text-gray-500'><i class="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>


            </div>
            <div className=" broder mt-32  ">
                <p className='text-center py-6'>Home/ Shop/ New & Now/ New Arrivals/ Solid Wood Bar Storage Cabinet</p>
                <div className="detailimg grid grid-cols-2 borer w-[95%] py-6 h-auto gap-4">
                    <div className=" px-6 border">

                        <Magnifier src={data.image} />


                    </div>


                    <div className=" flex flex-col px-10  py- ">
                        <p className='text-4xl '>Wood Outdoor Adirondack Chair</p>
                        <div className=" py-4 flex  list-none gap-4">
                            
                            <li>
                                Stack: <span className='text-green-500'> in stock</span>
                            </li>
                        </div>
                        <div className=" py-4 font-bold">Date: .............</div>
                        <div className=" py-2">
                            <p className='text-xl'> Price: ${data.price} </p>

                            <p className='py-2'>Aliquam condimentum dictum gravida. Sed eu odio id lorem fermentum faucibus. Cras tempor semper ligula.</p>

                        </div>
                        <div className="  py-4">
                            <p className='py-2 font-bold '>COLOR</p>
                            <div className=" flex gap-2">
                            <div className="border ">
                                <div className="border m-1  bg-red-500 px-4 py-4"></div>
                            </div>
                            <div className="border ">
                                <div className="border m-1  bg-blue-500 px-4 py-4"></div>
                            </div>
                            <div className="border ">
                                <div className="border m-1  bg-pink-500 px-4 py-4"></div>
                            </div>
                            <div className="border ">
                                <div className="border m-1  bg-yellow-500 px-4 py-4"></div>
                            </div>
                            </div>

                            <div className="flex gap-6 mt-10">
                                <li className='flex'>
                                    <button className='py-2 text-xl font-bold px-4 bg-gray-400 text-white '>-</button>
                                    <button className='py-2 text-xl font-bold px-4 bg-gray-400 text-white '>1</button>
                                    <button className='py-2 text-xl font-bold px-4 bg-gray-400 text-white '>+</button>

                                </li>
                                <button className='py-2  w-full text-xl px-4 bg-gray-400 hover:bg-red-500 text-white'>Add To Cart </button>
                            </div>
                            <button className='py-2 hover:text-red-500 hover:cursor-disable mt-4  w-full text-xl px-4 bg-text-400  border'>Buy Now </button>
                            <div className="py-6 list-none">
                                <li className='pt-4 text-md'>SKU: <span className='text-gray-500' >0093</span></li>
                                <li className='pt-4 text-md'>BRANDS: <span className='text-gray-500' >Creative Design</span></li>
                                <li className='pt-4 text-md'>TAGS: <span className='text-gray-500' >Furniture, Trending, Wood</span></li>

                            </div>
                        </div>

                    </div>


                </div>

            </div>

            {data.category && <Relatedproducts category={data?.category} />}
            <Footer />

        </>
    )
}

export default DetailPage