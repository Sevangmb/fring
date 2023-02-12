import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import UserProvider from "./contexts/user.context";
import Signup from "./pages/Signup.page";
import PCarousel from "./pages/Carousel.page";
import ResponsiveAppBar from "./components/Nav";

function App() {
  return (
    <>
      <ResponsiveAppBar />
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
    </>
  );
}

export default App;
