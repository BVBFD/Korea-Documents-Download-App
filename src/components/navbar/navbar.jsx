import React from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./navbar.module.css";

const Navbar = ({ authService }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onLogout = (event) => {
    authService.logout();
    navigate("/");
  };

  const onDownHistory = () => {
    navigate(`/${id}/history`);
  };

  const onSearch = () => {
    navigate(`/${id}/search`);
  };

  return (
    <header className={styles.navbtnBox}>
      <h1>한국 사무 서류 다운로드 App</h1>
      <button className={styles.navBtn} onClick={onSearch}>
        검색
      </button>
      <button className={styles.navBtn} onClick={onDownHistory}>
        히스토리
      </button>
      <button className={styles.navBtn} onClick={onLogout}>
        로그아웃
      </button>
    </header>
  );
};

export default Navbar;
