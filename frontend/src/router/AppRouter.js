import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.js";
import Record from "../pages/record";
import Main from "../pages/main";
import Signup from "../pages/Signup";
import Welcome from "../pages/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<Main />} />
      <Route path="/record" element={<Record />} />
      <Route path="/user" element={<Welcome />} />
    </Routes>
  );
};

export default AppRouter;
