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
import RegisterUser from "../src/components/accounts/registerPages/registerUser";
import ServiceProviderReg from "../src/components/accounts/registerPages/serviceProviderReg";
import Cart from "./components/Pages/CartCss/cart";
import RFQ from "../src/components/Pages/rfq";

//Categories
import TopCategories from '../src/components/Pages/Categories/TopCategory';
import Categories from '../src/components/Pages/Categories/CategoriesPage';
//Categories Ends

import Wishlist from "../src/components/Pages/wishlist";
import AtataInsurance from "../src/components/AtataServicesPage/Atata-insurancePage";
import AtataLogistics from "../src/components/AtataServicesPage/Atata-logisticsPage";
import AtataWarehouse from "../src/components/AtataServicesPage/Atata-warehousePage";
import AtataPay from "../src/components/AtataServicesPage/AtataPay-Page";
import ProductPage from '../src/components/Pages/product-preview/ProductMain'
import Checkout from '../src/components/checkout/mainCheckout'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/topcategories" component={TopCategories} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/Signin" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/forgotpassword" component={Forgotpwd} />
        <Route exact path="/newpassword" component={NewPwd} />
        <Route exact path="/RFQ" component={RFQ} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/product-page" component={ProductPage} />
        <Route exact path="/Whislist" component={Wishlist} />
        <Route exact path="/IndividualRegistration" component={RegisterUser} />
        <Route exact path="/serviceprovider" component={ServiceProviderReg} />
        <Route exact path="/atataPay" component={AtataPay} />
        <Route exact path="/atataWarehouse" component={AtataWarehouse} />
        <Route exact path="/atataLogistics" component={AtataLogistics} />
        <Route exact path="/atataInsurance" component={AtataInsurance} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
