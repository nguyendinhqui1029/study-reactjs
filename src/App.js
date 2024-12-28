import './App.css';
import Admin from "screens/admin/Admin";
import Home from "screens/home/Home";
import About from "screens/about/About";
import Product from 'screens/product/Product';
import DetailProduct from 'screens/detail-product/DetailProduct';
import Contact from 'screens/contact/Contact';
import News from 'screens/news/News';
import ExampleSource from 'screens/example-source/ExampleSource';
import CartDetail from 'screens/cart-detail/CartDetail';
import ResultSearch from 'screens/result-search/ResultSearch';
import MyOrder from 'screens/my-order/MyOrder';
import Login from 'screens/login/Login';

import { Provider } from "react-redux";
import store from "store";
import "assets/scss/common.scss";

//dynamic icon

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import HeaderMain from "component/HeaderMain/HeaderMain";
import Footer from "component/Footer/Footer";

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);
function App() {
  return (
    <Provider store={store}>
        {/* //get all icon name */}
        {/* {iconList.map(icon=>{
          return (
            <FontAwesomeIcon style={{padding:'5px'}} icon={icon.iconName}>
              {icon.iconName}
            </FontAwesomeIcon>
          );
        })} */}
       <Routes>
      {/* Admin Route */}
      <Route path="/admin/*" element={<Admin />} />

      {/* Main Layout Route with Header and Footer */}
      <Route element={<><HeaderMain /><main><Outlet /></main><Footer /></>}>
        {/* Nested routes for dynamic content */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/source" element={<ExampleSource />} />
        <Route path="/cart-detail" element={<CartDetail />} />
        <Route path="/search-result" element={<ResultSearch />} />
        <Route path="/my-order" element={<MyOrder />} />
        
        {/* When path is /account, the Login component will render */}
        <Route path="/account" element={<Login />} />
      </Route>
    </Routes>
    </Provider>
  );
}

export default App;
