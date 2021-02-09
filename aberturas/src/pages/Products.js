import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Products.css';
import { ProductsItems } from '../components/ProductsItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Products() {

    document.title = 'Bruno Aberturas | Productos'

    return (
        <>
        <Navbar/>
        <div className='products-container'>     
            {ProductsItems.map((item, index) => {
                return (
                    <Link to={item.path} className='link'>
                        <div key={index} className={item.cName}>
                            <div className={item.imgcName}></div>
                            <span>{item.title}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default Products
