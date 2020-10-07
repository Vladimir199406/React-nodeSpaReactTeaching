import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageHeader from "./mainPage/mainPageHeader";
import MainPageMain from "./mainPage/mainPageMain";
import SideBarGoodsContent from "./goods/sideBarGoodsContent";
import MainPageFooter from "./mainPage/mainPageFooter";


function App() {
  return (
      <div className="App">
        <header>
          <MainPageHeader/>
        </header>
        <main>
          <MainPageMain/>
          <SideBarGoodsContent/>
        </main>
        <footer>
          <MainPageFooter/>
        </footer>
      </div>
  );
}

export default App;
