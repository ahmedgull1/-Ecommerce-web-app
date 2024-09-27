import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ele}) {
    return (
        <>
            <div className='products flex flex-col gap-2  w-[295px]  h-[380px] '>

                <div className='productsimg w-[295px] relative h-[300px]  group overflow-hidden'>

                    <Link to={`/detail/${ele.id}`}>
                        <img className='w-[300px] h-[300px] ' src={ele.image} alt="" />
                        <button className='productsbtn list-none w-full h-10 absolute -bottom-32 hover-bg-green-600 group-hover:bottom-0 text-center bg-gray-300 py-2 '>READ MORE</button>
                    </Link>

                </div>

                <div className=' w-full h-10  list-none'>
                    <p className=' truncate px-4 py-1'>{ele.title}</p>
                    <p className='px-4 font-bold'>Price: ${ele.price}</p>
                </div>

            </div>
        </>
    )
}

export default ProductCard