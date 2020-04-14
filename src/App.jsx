import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/newScreen';
import TableProduct from './views/component/TableProduct';
import CounterScreen from './views/screen/CounterScreen';
import ProductCard from './views/component/ProductCard';
import DaftarJual from './views/component/DaftarJual';
import Pertama from './pertama.jpg';
import Marineford from './marineford.png';
import WholeCake from './wholecake.jpg';
import Wano from './wano.png';
import InputScreen from './views/screen/inputSreen'
import LoginMenu from './views/component/loginMenu'

import { render } from '@testing-library/react';


function App() {
  // let arr = ["Bandung", "Tangerang", "Surakarta"]
  let arrProduct = [
    {
      nama: "Arc Romance Dawn",
      penerbit: "Eiichiro Oda",
      harga: 7.62,
      rating: "4.5 / 5",
      desc: "Ini adalah episode pertama dari komik One Piece",
      img: Pertama,
      discount: 20,
      stock: 2
    },
    {
      nama: "Arc Marine Ford",
      penerbit: "Eiichiro Oda",
      harga: 8,
      rating: "5 / 5",
      desc: "Ini adalah Arc terbaik saat ini",
      img: Marineford,
      discount: 40,
      stock: 0
    },
    {
      nama: "Arc Whole Cake",
      penerbit: "Eiichiro Oda",
      harga: 5.62,
      rating: "4.5 / 5",
      desc: "Arc pertama Bajak Laut Mugiwara melawan Yonkou",
      img: WholeCake,
      discount: 20,
      stock: 10
    },
    {
      nama: "Arc Wano",
      penerbit: "Eiichiro Oda",
      harga: 10.62,
      rating: "4.5 / 5",
      desc: "Arc yang dibilang akan lebih bagus daripada Arc Marine Ford",
      img: Wano,
      discount: 0,
      stock: 10
    },
  ]

  const renderArr = () => {
    return arrProduct.map((val) => {
      return (
        // <CounterScreen kota = {val} />
        <div className="col-md-6">
          <DaftarJual DaftarItem={val} />
        </div>

      )
    })
  }

  return (
    <div className="App">

      <h1>Halo Dunia</h1>
      {/* <h2 style={{border: "1px solid blue", marginTop: "30px"}}>tes tulisan</h2> */}
      {/* <div className="row">
        {renderArr()}
      </div> */}
      {/* <CounterScreen /> */}
      {/* <InputScreen /> */}
      <LoginMenu/>

    </div>
  );
}

export default App;
