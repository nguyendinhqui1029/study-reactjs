import "./App.css";
import NavigateMenu from "./component/NavigateMenu/NavigateMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/about/About";
import Product from "./screens/product/Product";
import Contact from "./screens/contact/Contact";
import News from "./screens/news/News";
import Home from "./screens/home/Home";
const listMenuItem = [
  { path: "/", label: "Trang chu", exact: true },
  { path: "/about", label: "Gioi thieu", exact: false },
  { path: "/product", label: "San pham", exact: false },
  { path: "/news", label: "Tin tuc", exact: false },
  { path: "/contact", label: "Lien he", exact: false },
];
const listCategory = [
  {
    id: 1,
    label: "Máy ảnh &amp; Máy quay phim",
    subCategory: [
      {
        id: 2,
        label: "MÁY QUAY PHIM",
        subCategory: [
          { id: 4, label: "MÁY QUAY PHIM", subCategory: [] },
          { id: 5, label: "MÁY QUAY PHIM", subCategory: [] },
        ],
      },
      {
        id: 3,
        label: "Dien thoai",
        subCategory: [
          { id: 6, label: "MÁY QUAY PHIM", subCategory: [] },
          { id: 7, label: "MÁY QUAY PHIM", subCategory: [] },
        ],
      },
      {
        id: 4,
        label: "Dien thoai 1",
        subCategory: [
          { id: 8, label: "MÁY QUAY PHIM", subCategory: [] },
          { id: 9, label: "MÁY QUAY PHIM", subCategory: [] },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Máy ảnh",
    subCategory: [],
  },
];
function App() {
  function handleSelectedCategory(item) {
    console.log(item);
  }
  return (
    <Router>
      <div className="App">
        <NavigateMenu
          listCategory={listCategory}
          listMenu={listMenuItem}
          selectedCategory={handleSelectedCategory}
        ></NavigateMenu>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
