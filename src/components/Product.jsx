import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
function Product() {

  const [products, setproducts] = useState([])
  useEffect(() => {

    const fetchProducts = async () => {

      const { data } = await axios.get("https://fakestoreapi.com/products")
      setproducts(data)
      // console.log({ data })

    }

    fetchProducts()
  }, [])
  


  console.log(products, 'products');
  return (
    <>
      <div className="w-[93%] mx-auto flex flex-wrap py-8 gap-6">
        {
          products?.map((ele, i) => (
            <ProductCard key={i} ele={ele} />
          ))

        }
      </div>

    </>
  )
}

export default Product