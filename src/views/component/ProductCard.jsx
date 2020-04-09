import React from 'react'

const ProductCard = (props) => {
    const { productData } = props;
    const { nama, harga, desc, img, discount, stock } = productData;
    const renderData = () => {
        if (stock) {
            return (
                <>
                    <h3>Nama: {nama}</h3>
                    <h4>Harga: {harga}</h4>
                    {
                        discount > 0 ? (
                            <h4>discount: {discount}% menjadi {harga - harga * (discount / 100)}</h4>
                        ) : null
                    }
                    <h4>stock: {stock}</h4>
                    <p>Description: {desc}</p>
                </>
            )
        } else {
            return <h2>stok kosong</h2>
        }
    }
    return (

        <div style={{ width: "240px", padding: "16px", border: "1px solid black", borderRadius: "7px" }}>
            {renderData()}
        </div>

    )
}

export default ProductCard