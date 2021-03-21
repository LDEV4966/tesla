import React from "react";
import Header from "./components/Header/Header";
import MainItem from "./components/MainItem/MainItem";
import "./App.css";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <MainItem
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnLink=""
          leftBtnTxt="ORDER NOW"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
          first
        />
        <MainItem
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <MainItem
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <MainItem
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <MainItem
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <MainItem
          title="Solar for New Roofs"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnLink=""
          leftBtnTxt="ORDER NOW"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <MainItem
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Accessories}
          leftBtnLink=""
          leftBtnTxt="SHOP NOW"
          rightBtnLink=""
          rightBtnTxt="LEARN MORE"
        />
      </div>
    </div>
  );
}

export default App;
