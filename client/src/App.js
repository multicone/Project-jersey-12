import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";
import CreateAccount from "./screens/CreateAccount";
import Footer from "./components/Footer";
import Contact from "./screens/Contact";
import UserContextProvider from "./contexts/userContext";
import { Toaster } from "react-hot-toast";
import JerseyContextProvider from "./contexts/jerseyContext";
import Orders from "./screens/Orders";
import OrderContextProvider from "./contexts/orderContext";

const App = () => {
  return (
    <div>
      <Toaster />
      <UserContextProvider>
        <JerseyContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sign-in" component={SignIn} exact />
              <Route path="/create-account" component={CreateAccount} exact />
              <Route path="/dashboard" component={Dashboard} exact />
              <OrderContextProvider>
                <Route path="/orders" component={Orders} exact />
              </OrderContextProvider>
              <Route path="/contact" component={Contact} exact />
            </Switch>
            <Footer />
          </Router>
        </JerseyContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
