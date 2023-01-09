import React, { useState, useRef } from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react';



const Products = () => {
    const [menuProducts, setMenuProducts] = useState(ProductsData);

    const [parent] = useAutoAnimate<HTMLDivElement>()

    const filter = (type: string)=> {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))}
        
        

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>

            <div className={css.products} >
                <ul className={css.menu}>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Kkin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {menuProducts.map((product, i) => (
                        <div className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Show Now</div>
                            </div>
                            <img src={product.img} alt="img-p" />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products