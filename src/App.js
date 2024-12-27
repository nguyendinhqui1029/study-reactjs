import "./App.css";
import "./assets/scss/common.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Provider } from "react-redux";
import store from "./store";
//dynamic icon

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import HeaderMain from "./component/HeaderMain/HeaderMain";
import Footer from "./component/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./screens/admin/Admin";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Product from './screens/product/Product';
import DetailProduct from './screens/detail-product/DetailProduct';
import Contact from './screens/contact/Contact';
import News from './screens/news/News';
import ExampleSource from './screens/example-source/ExampleSource';
import CartDetail from './screens/cart-detail/CartDetail';
import ResultSearch from './screens/result-search/ResultSearch';
import MyOrder from './screens/my-order/MyOrder';
import Login from './screens/login/Login';

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* //get all icon name */}
        {/* {iconList.map(icon=>{
          return (
            <FontAwesomeIcon style={{padding:'5px'}} icon={icon.iconName}>
              {icon.iconName}
            </FontAwesomeIcon>
          );
        })} */}
        <Router>
          <Switch>
            <Route path="/admin/:path?" exact>
              <Switch>
                <Route path="/admin" component={Admin} />
              </Switch>
            </Route>

            <Route>
              <HeaderMain />
              <Switch>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/product" exact>
                  <Product />
                </Route>
                <Route path="/product/:id">
                  <DetailProduct />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/news">
                  <News />
                </Route>
                <Route path="/" exact>
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
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
