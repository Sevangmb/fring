import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";

import PCarousel from "./pages/Carousel.page";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* We are wrapping our whole app with UserProvider so that */}
        {/* our user is accessible through out the app from any page*/}
        <UserProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/pcarousel" element={<PCarousel />} />
            {/* We are protecting our Home Page from unauthenticated */}
            {/* users by wrapping it with PrivateRoute here. */}
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
