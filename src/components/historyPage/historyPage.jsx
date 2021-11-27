import React from "react";
import styles from "./historyPage.module.css";
import { useParams } from "react-router";

const HistoryPage = ({ usersHistory }) => {
  const { id } = useParams();
  console.log(id, usersHistory);

  return (
    <div className={styles.searchBox}>
      <section className={styles.searchBoxLogoBtnBox}>
        <input
          className={styles.totalSearchInput}
          type="text"
          placeholder="전체 검색 기능 (제목 필터링)"
        />
        {usersHistory.map((user) => {
          if (user.user === id) {
            return user.userHistory.map((histy) => {
              return (
                <div className={styles.docsContent}>
                  <div className={styles.docsContentTitle}>{histy}</div>
                  <div className={styles.downloadBtnBox}>
                    <a
                      href={`../docs/${histy}/${histy}.xls`}
                      download={`${histy}.xls`}
                    >
                      <button className={styles.excelBtn}>
                        <img src="../images/excel.jpg"></img>
                      </button>
                    </a>
                    <a
                      href={`../docs/${histy}/${histy}.doc`}
                      download={`${histy}.doc`}
                    >
                      <button className={styles.wordBtn}>
                        <img src="../images/word.png"></img>
                      </button>
                    </a>
                    <a
                      href={`../docs/${histy}/${histy}.hwp`}
                      download={`${histy}.hwp`}
                    >
                      <button className={styles.hangulBtn}>
                        <img src="../images/hangul.jpg"></img>
                      </button>
                    </a>
                  </div>
                </div>
              );
            });
          }
        })}
      </section>
    </div>
  );
};

export default HistoryPage;
