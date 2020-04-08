import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/newScreen';
import TableProduct from './views/component/TableProduct'
import { render } from '@testing-library/react';


function App() {
  let arr = ["Bandung", "Tangerang", "Surakarta"]
  // const renderArr = () =>{
  //  return arr.map((val) =>{
  //     return(
  //       <>
  //       <p>{val}</p>
  //       <NewScreen/>
  //       </>
  //     )
  //   })
  // }
  
  return (
    <div className="App">  
   
    <h1>Halo Dunia</h1>
    <h2 style={{border: "1px solid blue", marginTop: "30px"}}>tes tulisan</h2>
    {/* {renderArr()} */
      <TableProduct/>
    }
    
    </div>
  );
}

export default App;
