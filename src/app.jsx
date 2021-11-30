import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HistoryPage from "./components/historyPage/historyPage";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";

const App = ({ authService, dataRepository }) => {
  const [files, setFiles] = useState([
    "경력증명서",
    "거래명세서",
    "이력서(국문)",
    "이력서(영문)",
  ]);

  const [usersHistory, setUsersHistory] = useState([]);

  useEffect(() => {
    dataRepository.syncIdData((vals) => {
      setUsersHistory(vals);
    });
  }, [dataRepository]);

  return (
    <>
      <Link to="/"></Link>
      <Routes>
        <Route
          exact={true}
          path={"/"}
          element={
            <Login
              dataRepository={dataRepository}
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
                dataRepository={dataRepository}
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
