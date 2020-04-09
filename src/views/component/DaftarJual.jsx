import React from 'react';
import './bootstrap.css';
import './style.css'
import { grey, blue } from 'color-name';


const ProductData = (props) => {
    const { DaftarItem } = props;
    const { nama, penerbit, harga, rating, desc, img, discount, stock } = DaftarItem;
    return (
        <>
            <div className="row mt-4 justify-content-center">
                <img className="col-md-4 " style={{ height: "250px"}} src={img}></img>
                <div className="col-md-7 text-left">
                    <p>{penerbit}</p>
                    <p style={{fontSize:"30px", lineHeight:"0px"}}><strong>{nama}</strong></p>
                    <p>{rating} Review</p>
                    <p className="mt-4 ">{desc}</p>
                    {
                        discount > 0 ? (
                            <p><strong>${(harga - harga * (discount / 100)).toFixed(2)}</strong> <del style={{color:"grey"}}>${harga}</del></p>
                        ) : <p><strong>${harga}</strong> </p> 
                    } 
                </div>
                {
                    stock > 0 ?(
                        <button className="button m-2" >BUY NOW</button>
                    ) : <button className="button m-2" style={{backgroundColor:"grey", color:"white"}} disabled>BUY NOW</button> 
                }
                
            </div>

        </>
    )
}

export default ProductData