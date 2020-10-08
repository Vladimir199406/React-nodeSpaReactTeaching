import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageHeader from "./mainPage/mainPageHeader";
import MainPageMain from "./mainPage/mainPageMain";
import ModalWindowGoodsTemplate from "./goods/modalWindowGoodsTemplate";
import MainPageFooter from "./mainPage/mainPageFooter";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <MainPageHeader/>
              <MainPageMain/>
              <MainPageFooter/>
              <ModalWindowGoodsTemplate/>
          </BrowserRouter>
      </div>
  );
}

export default App;
