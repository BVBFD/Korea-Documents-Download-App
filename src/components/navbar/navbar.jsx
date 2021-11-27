import React from "react";
import { Link, Routes } from "react-router-dom";
import { Route, useNavigate, useParams } from "react-router";
import styles from "./navbar.module.css";

const Navbar = ({ authService }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onLogout = (event) => {
    console.log(event.target);
    authService.logout();
    navigate("/");
  };

  const onDownHistory = () => {
    navigate(`/history/${id}`);
  };

  const onSearch = () => {
    navigate(`/search/${id}`);
  };

  return (
    <header className={styles.navbtnBox}>
      <h1>한국 사무 서류 다운로드 App</h1>
      <button className={styles.navBtn} onClick={onSearch}>
        검색
      </button>
      <button className={styles.navBtn} onClick={onDownHistory}>
        다운로드 히스토리
      </button>
      <button className={styles.navBtn} onClick={onLogout}>
        로그아웃
      </button>
    </header>
  );
};

export default Navbar;
