import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Search from "./components/search/search";

const App = ({ authService }) => {
  return (
    <>
      <Link to="/"></Link>
      <Routes>
        <Route
          exact={true}
          path={"/"}
          element={<Login authService={authService} />}
        />
        <Route
          exact={true}
          path={"/search/:id"}
          element={<Search authService={authService} />}
        />
      </Routes>
    </>
  );
};

export default App;
