import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const { currency } = useContext(ShopContext);
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className="overlfow-hidden">
            <img src={image[0]} alt="image of product" className="h-[390px] w-[450px] hover:scale-110 transition ease-in-out" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='pb-2 text-sm font-medium'>{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem