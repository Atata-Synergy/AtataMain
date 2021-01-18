import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages//

import Page from "../src/components/Pages/MainPage";
import NotFound from "./components/Pages/pageNotFound/PageNotFound";
import Login from "../src/components/accounts/Login";
import Register from "../src/components/accounts/registerPages/RegisterMain";
import Forgotpwd from "../src/components/accounts/forgotPassword";
import NewPwd from "../src/components/accounts/registerPages/resetPassword";

//Categories
import TopCategories from '../src/components/Pages/Categories/TopCategory';
import Categories from '../src/components/Pages/Categories/CategoriesPage';
//Categories Ends

import ProductPage from '../src/components/Pages/product-preview/ProductMain'
import Checkout from '../src/components/checkout/mainCheckout'
import Cart from '../src/components/cart/cart'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/topcategories" component={TopCategories} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/Signin" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/forgotpassword" component={Forgotpwd} />
        <Route exact path="/newpassword" component={NewPwd} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/product-page" component={ProductPage} />
        <Route exact path="/cart" component={Cart} />


        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
