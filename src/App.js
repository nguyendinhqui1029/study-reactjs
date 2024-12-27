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
import Admin from "./Screens/Admin/Admin";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Product from './Screens/Product/Product';
import DetailProduct from './Screens/DetailProduct/DetailProduct';
import Contact from './Screens/Contact/Contact';
import News from './Screens/News/News';
import ExampleSource from './Screens/ExampleSource/ExampleSource';
import CartDetail from './Screens/CartDetail/CartDetail';
import ResultSearch from './Screens/ResultSearch/ResultSearch';
import MyOrder from './Screens/MyOrder/MyOrder';
import Login from './Screens/Login/Login';

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
