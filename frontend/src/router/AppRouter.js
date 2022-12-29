import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Record from "../pages/record";
import Main from "../pages/main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />} />
      <Route path="/record" element={<Record />} />
    </Routes>
  );
};

export default AppRouter;
