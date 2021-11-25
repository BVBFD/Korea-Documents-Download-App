import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Search from "./components/search/search";

const App = ({ authService }) => {
  const [files, setFiles] = useState([
    "경력증명서",
    "거래명세서",
    "이력서(국문)",
    "이력서(영문)",
  ]);

  const [usersHistory, setUsersHistory] = useState([
    { lse126: ["경력증명서", "거래명세서", "이력서(국문)", "이력서(영문)"] },
    { dkf126: ["경력증명서", "거래명세서"] },
    { lsc126: ["경력증명서", "이력서(국문)"] },
    { pxs126: ["경력증명서", "이력서(영문)"] },
  ]);

  console.log(usersHistory);

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
          element={<Search authService={authService} files={files} />}
        />
      </Routes>
    </>
  );
};

export default App;
