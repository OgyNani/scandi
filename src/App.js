import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
// import Home from "./Component/Home";
import history from "./history";
import Prod1 from "./data/Prod1";
import Category from "./Component/Category";
import CartPage from "./Component/CartPage";
import { connect } from "react-redux";
import React from "react";

class App extends React.Component {

render() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Cart">
          <CartPage />
        </Route>
        
        <Route path="/:category/product/:id" component={Prod1}/>
        <Route path="/:category" component={Category} />
        <Route path="/" component={Category}/>
      </Switch>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
