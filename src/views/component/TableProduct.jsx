import React from 'react';
import './style.css';


const TableProduct = () => {
    let arr = [
        {nama : "Luffy", pekerjaan : "Kapten"},
        {nama : "Zoro", pekerjaan : "Navigator"},
        {nama : "Sanji", pekerjaan : "Koki"}
    ];

    const renderTable = () =>{
        return arr.map((val,index) =>{
            return(
            <>
            <tr>
            <th>{index+1}</th>
            <th>{val.nama}</th>
            <th>{val.pekerjaan}</th>
            </tr>
            </>
            )
        })
    }
    return(
        <div align="center">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>   
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;