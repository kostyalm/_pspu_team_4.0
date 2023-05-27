import { LoginPage } from "./pages/LoginPage/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { ForFarmer } from "./pages/ForFarmers/ForFarmer";
import { Catalog } from "./pages/Catalog/Catalog";
const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    // <div className="App">
    //   <LoginPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forfarmers" element={<ForFarmer />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default observer(App);
