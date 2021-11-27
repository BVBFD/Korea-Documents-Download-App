import React, { useRef } from "react";
import { Link, Routes } from "react-router-dom";
import { Route, useNavigate, useParams } from "react-router";
import styles from "./search.module.css";
import ContentList from "../contentList/contentList";

const Search = ({ files, usersHistory, setUsersHistory }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={styles.searchBox}>
      <section className={styles.searchBoxLogoBtnBox}>
        <input
          className={styles.totalSearchInput}
          type="text"
          placeholder="전체 검색 기능 (제목 필터링)"
        />
        {files.map((file) => {
          console.log(file);
          return (
            <ContentList
              file={file}
              usersHistory={usersHistory}
              setUsersHistory={setUsersHistory}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Search;
