import React, { useRef } from "react";
import { Link, Routes } from "react-router-dom";
import { Route, useNavigate, useParams } from "react-router";
import styles from "./search.module.css";
import Navbar from "../navbar/navbar";

const Search = ({ authService }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={styles.searchBox}>
      <Navbar authService={authService} />
      <section className={styles.searchBoxLogoBtnBox}>
        <input
          className={styles.totalSearchInput}
          type="text"
          placeholder="전체 검색 기능 (제목 필터링)"
        />
        <div className={styles.docsContent}>
          <div className={styles.docsContentTitle}>경력 증명서 (표준양식)</div>
          <div className={styles.downloadBtnBox}>
            <button className={styles.excelBtn}>
              <img src="../images/excel.jpg"></img>
            </button>
            <button className={styles.wordBtn}>
              <img src="../images/word.png"></img>
            </button>
            <button className={styles.hangulBtn}>
              <img src="../images/hangul.jpg"></img>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
