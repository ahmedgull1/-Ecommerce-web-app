import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
function Relatedproducts({ category }) {

  const encodedCategory = encodeURIComponent(category)

  const [products, setProduct] = useState([])
  useEffect(() => {

    const fetchProduct = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${encodedCategory}`)
      setProduct(data)
    }
    fetchProduct()

  }, [])

  return (
    <>
          <h1 className='px-10 pt-6 text-3xl font-bold font-inter  '>Related Products</h1>
      <div className="flex  f gap-4 w-[100%] py-6 h-[420px]  px-10 ">
          {
            products?.map((product, index) => (
              <div className='w-[300px]'>
                <ProductCard key={index} ele={product} />
              </div>
            ))

          }
        </div>

        <hr className='mt-10'/>

    </>
  )
}

export default Relatedproducts