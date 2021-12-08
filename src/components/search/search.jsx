import React, { useRef } from "react";
import { Link, Routes } from "react-router-dom";
import { Route, useNavigate, useParams } from "react-router";
import styles from "./search.module.css";
import ContentList from "../contentList/contentList";
import { useState } from "react";

const Search = ({ files, usersHistory, setUsersHistory, dataRepository }) => {
  const { id } = useParams();
  const [index, setIndex] = useState(true);
  const [filesUpdate, setFilesUpdate] = useState();

  const onFileSearch = (event) => {
    if (event.target.value === "") {
      setFilesUpdate("");
      setIndex(true);
    } else if (event.target.value) {
      setIndex(false);
      const filesCopy = [...files];
      const filesUpdatePrepare = filesCopy.map((file) => {
        if (file.includes(event.target.value)) {
          return file;
        }
      });
      setFilesUpdate(filesUpdatePrepare);
    }
  };

  return (
    <div className={styles.searchBox}>
      <section className={styles.searchBoxLogoBtnBox}>
        <input
          className={styles.totalSearchInput}
          type="text"
          placeholder="전체 검색 기능 (제목 필터링)"
          onChange={onFileSearch}
        />
        {index
          ? files.map((file) => {
              return (
                <ContentList
                  file={file}
                  dataRepository={dataRepository}
                  usersHistory={usersHistory}
                  setUsersHistory={setUsersHistory}
                />
              );
            })
          : filesUpdate.map((file) => {
              if (file === undefined) {
                return;
              }
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
