import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './components/footer/footer';
import HistoryPage from './components/historyPage/historyPage';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

const App = ({ authService, dataRepository }) => {
  const [files, setFiles] = useState([
    '가계부',
    '간이영수증',
    '감사종합보고서',
    '경력증명서',
    '교육성적표',
    '교육참석결과보고서',
    '교통사고목격진술서',
    '견적서',
    '결근신청서',
    '거래명세서',
    '거래명세표',
    '근로계약서(연봉)',
    '근무현황표(월)',
    '급여대장',
    '기안서',
    '대차대조표',
    '매출총이익표',
    '사직서',
    '사직원',
    '손익계산서',
    '이력서(국문)',
    '이력서(영문)',
    '직원실적관리',
    '화장실관리대장',
    '회사행사예정표',
    '회의록',
    '휴대용공구대장',
    '휴일근무신청서',
    '휴직원',
    '희망자료요청서',
  ]);

  const [userData, setUserData] = useState();
  const [usersHistory, setUsersHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dataRepository.syncIdData((vals) => {
      setUsersHistory(vals);
    });
  }, [dataRepository]);

  console.log();

  return (
    <>
      <Link to='/'></Link>
      <Routes>
        <Route
          exact={true}
          path={'/'}
          element={
            <Login
              dataRepository={dataRepository}
              authService={authService}
              usersHistory={usersHistory}
              setUsersHistory={setUsersHistory}
              setUserData={setUserData}
            />
          }
        />
        <Route
          exact={true}
          path={'/:id/search'}
          element={
            !userData ? (
              <Login
                dataRepository={dataRepository}
                authService={authService}
                usersHistory={usersHistory}
                setUsersHistory={setUsersHistory}
                setUserData={setUserData}
              />
            ) : (
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
            )
          }
        />
        <Route
          exact={true}
          path={'/:id/history'}
          element={
            !userData ? (
              <Login
                dataRepository={dataRepository}
                authService={authService}
                usersHistory={usersHistory}
                setUsersHistory={setUsersHistory}
                setUserData={setUserData}
              />
            ) : (
              <>
                <Navbar authService={authService} />
                <HistoryPage usersHistory={usersHistory} />
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
