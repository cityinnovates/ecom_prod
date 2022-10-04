import './App.css';
import React from 'react';
import Dashbord_Header from './common/header/Dashbord_Header';
import Dashbord_SideBarMenu from './common/sideBarMenu/Dashbord_SideBarMenu';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePageContainer from './pages/homepage/HomePageContainer';
import ProductBuilder from './pages/product/ProductBuilder';
import ManageStore from './pages/orders/ManageStore';


function App() {

  return (
     <React.Fragment>
      <div className='App wrapper'>

            <BrowserRouter>
                <Dashbord_Header/>
                <Dashbord_SideBarMenu/>

                <Routes>
                  <Route path='/' element={<HomePageContainer/>}/>
                  <Route path='/product_builder' element={<ProductBuilder/>}/>
                  <Route path='/manage/order' element={<ManageStore/>}/>
                </Routes>
            </BrowserRouter>
      </div>
     </React.Fragment>
  );
}

export default App;
