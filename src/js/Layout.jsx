import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./views/Home.jsx";
import AddContact from "./views/AddContact.jsx";
import Footer from "./component/Footer.jsx";
import Store from "./store/Store.js";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </Store>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
