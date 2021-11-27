import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HistoryPage from "./components/historyPage/historyPage";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";

const App = ({ authService }) => {
  const [files, setFiles] = useState([
    "경력증명서",
    "거래명세서",
    "이력서(국문)",
    "이력서(영문)",
  ]);

  const [usersHistory, setUsersHistory] = useState([
    {
      user: "lse126",
      userHistory: ["경력증명서", "거래명세서", "이력서(국문)", "이력서(영문)"],
    },
    { user: "dkf126", userHistory: ["경력증명서", "거래명세서"] },
    { user: "lsc126", userHistory: ["경력증명서", "이력서(국문)"] },
    { user: "pxs126", userHistory: ["경력증명서", "이력서(영문)"] },
  ]);

  console.log(usersHistory);

  return (
    <>
      <Link to="/"></Link>
      <Routes>
        <Route
          exact={true}
          path={"/"}
          element={
            <Login
              authService={authService}
              usersHistory={usersHistory}
              setUsersHistory={setUsersHistory}
            />
          }
        />
        <Route
          exact={true}
          path={"/:id/search"}
          element={
            <>
              <Navbar authService={authService} />
              <Search
                files={files}
                usersHistory={usersHistory}
                setUsersHistory={setUsersHistory}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact={true}
          path={"/:id/history"}
          element={
            <>
              <Navbar authService={authService} />
              <HistoryPage usersHistory={usersHistory} />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
