import React from 'react';
import './styles/ProductIndividual.css'
import { useHistory } from "react-router-dom";

function ProductIndividual(props){

    const history = useHistory();
   
    document.title = 'Bruno Aberturas | Productos'

    return(
        <>
            <div className='fix-product-individual-container'>
                <div className='product-individual-container'>
                    <div className='button-go-back' onClick={history.goBack}>
                        Volver
                    </div>
                    <div className='product-individual-img'>
                        <img src={props.img} alt="imagen de producto"/>
                    </div>
                    <div className='product-individual-description'>
                        {props.description}
                    </div>
                    <div className='product-individual-button'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductIndividual;