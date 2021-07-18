import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ExampleSource from "./screens/ExampleSource/ExampleSource";
import Footer from "./component/Footer/Footer";
import About from "./screens/About/About";
import Product from "./screens/Product/Product";
import Contact from "./screens/Contact/Contact";
import News from "./screens/News/News";
import Home from "./screens/Home/Home";
import CartDetail from "./screens/CartDetail/CartDetail";
import HeaderMain from "./component/HeaderMain/HeaderMain";
import "./assets/scss/common.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Provider } from "react-redux";
import store from "./store";
import ResultSearch from './screens/ResultSearch/ResultSearch';
//dynamic icon

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import MyOrder from './screens/MyOrder/MyOrder';
import Login from './screens/Login/Login';
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* //get all icon name */}
          {/* {iconList.map(icon=>{
          return (
            <FontAwesomeIcon style={{padding:'5px'}} icon={icon.iconName}>
              {icon.iconName}
            </FontAwesomeIcon>
          );
        })} */}
          <HeaderMain />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/source">
              <ExampleSource />
            </Route>
            <Route path="/cart-detail">
              <CartDetail />
            </Route>
            <Route path="/search-result">
              <ResultSearch />
            </Route>
            <Route path="/my-order">
              <MyOrder />
            </Route>
            <Route path="/account">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
