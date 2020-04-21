import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
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
// import LoginMenu from './views/screen/loginMenu'
import LifecycleScreen from './views/screen/lifecycle'
import HomeScreen from './views/screen/HomeScreen'
import PageNotFound from './views/screen/pageNotFound'
import { render } from '@testing-library/react';
import NavBar from './views/component/NavBar';
import ProfileScreen from './views/screen/ProfileScreen';
import RegisterMenu from './views/screen/weekend task/Register'
import LoginMenu from './views/screen/weekend task/login'
import profileMenu from './views/screen/weekend task/profile'
import ProfileMenu from './views/screen/weekend task/profile';
import TodoReduxScreen from './views/screen/todoredux';
import LoginScreen from './views/screen/loginMenu'


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
    <>
    <BrowserRouter>
    {/* <LifecycleScreen/> */}
    <NavBar/>
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/register" component={RegisterMenu} />
          <Route exact path="/todo" component={TodoReduxScreen} />
          <Route exact path="/Login" component={LoginMenu} />
          <Route exact path="/Input" component={InputScreen} />
          <Route exact path="/loginScreen" component={LoginScreen}/>
          <Route exact path="/profile/:username" component={ProfileScreen}/>
          <Route exact path="/profileSukses/:username" component={ProfileMenu}/>
          <Route path="*" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default withRouter(App);
