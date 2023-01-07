import React, { useState } from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
// import { useAutoAnimate } from '@formkit/auto-animate'

type Item = {
    name: string;
    detail: string;
    price: string;
    img: string;
    type?: string
    filleter?: (pro: string) => boolean
}



const Products = () => {
    const [menuProducts, setMenuProducts] = useState(ProductsData as Item[])
    // const [parent] = useAutoAnimate()

    // const filleter = (type: string): =>{
    //     // setMenuProducts(ProductsData.fillter((product: string) => product.type))
    //     const filleterProduct = ProductsData.fillter<Item[]>((product: string | any) => {
    //          return  product.type
    //         setMenuProducts(filleterProduct)
    //     })

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>

            {/* <div className={css.products} ref={parent}> */}
                <ul className={css.menu}>
                    {/* <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filleter("Kkin Care")}>Kkin Care</li>
                    <li onClick={() => filleter("Conditioners")}>Conditioners</li>
                    <li onClick={() => filleter("Foundations")}>Foundations</li> */}
                </ul>

                <div className={css.list}>
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
                {/* </div> */}
            </div>
        </div>
    )
}

export default Products