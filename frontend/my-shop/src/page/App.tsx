import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Home from "./Home";
import Header from "../components/Navbar";
import AllProductPage from "./AllProductPage";
import SearchProvider, { SearchContext } from "../components/SearchContext";

function App() {
  return (
    
    <div className="App">
      <SearchProvider>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/bundles-sets"}>
            <AllProductPage
              img={
                "https://coty.scene7.com/is/image/cotyemea/34_Feb%20Skin%20Re-Launch_Priority%20Category%20Banners_0201_Desktop_Moisturizers?wid=1440"
              }
              title={"BUNDLE AND SETS"}
              type={"bundles-sets"}
            />
          </Route>
          <Route exact path={"/cleansers"}>
            <AllProductPage
              img={
                "https://coty.scene7.com/is/image/cotyemea/KS-2083_New_Site_Category_Banners_Batch%203_Desktop_cleansers?wid=1440"
              }
              title={"CLEANSERS AND REMOVERS"}
              type={"cleansers"}
            />
          </Route>
          <Route exact path={"/moisturizers"}>
            <AllProductPage
              img={
                "https://coty.scene7.com/is/image/cotyemea/34_Feb%20Skin%20Re-Launch_Priority%20Category%20Banners_0201_Desktop_Bundles%20Sets?wid=1440"
              }
              title={"MOUSTURIZERS"}
              type={"mousturizers"}
            />
          </Route>
          <Route exact path={"/serums"}>
            <AllProductPage
              img={
                "https://coty.scene7.com/is/image/cotyemea/34_Feb%20Skin%20Re-Launch_Priority%20Category%20Banners_0201_Desktop_serums%20treatments?wid=1440"
              }
              title={"SERUMS AND TREATMENTS"}
              type={"serums"}
            />
          </Route>
          <Route exact path={"/:type/:id"} component={SingleProduct} />
        </Switch>
      </BrowserRouter>
     </SearchProvider>
     </div>
   
  );
}
export default App;
