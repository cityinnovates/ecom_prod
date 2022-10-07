
import React from 'react';
import DashbordHeader from './common/header/DashbordHeader';
import DashbordSideBarMenu from './common/sideBarMenu/DashbordSideBarMenu';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePageContainer from './pages/homepage/HomePageContainer';
import ProductBuilder from './pages/product/ProductBuilder';
import ManageStore from './pages/orders/ManageStore';

function App() {
  return (
     <React.Fragment>
      <div className='wrapper'>
            <BrowserRouter>
                <DashbordHeader/>
                <DashbordSideBarMenu/>
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
