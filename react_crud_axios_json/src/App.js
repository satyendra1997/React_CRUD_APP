import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import ViewList from "./components/VeiwList";
import UpdateForm from "./components/UpdateForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/view" element={<ViewList />}></Route>
          <Route path="/update/:id" element={<UpdateForm />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
