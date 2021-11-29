import React from "react";
import { useParams } from "react-router";
import styles from "./contentList.module.css";

const ContentList = ({ file, usersHistory, setUsersHistory }) => {
  const { id } = useParams();
  const buttonClick = (event) => {
    const usersHistoryCopy = [...usersHistory];
    const usersHistoryUpdate = usersHistoryCopy.map((user) => {
      if (
        user.user === id &&
        user.userHistory.includes(
          event.target.parentNode.parentNode.download.slice(0, -4)
        ) === false
      ) {
        user.userHistory.push(
          event.target.parentNode.parentNode.download.slice(0, -4)
        );
        return user;
      }
      return user;
    });
    setUsersHistory(usersHistoryUpdate);
  };

  return (
    <div className={styles.docsContent}>
      <div className={styles.docsContentTitle}>{file}</div>
      <div className={styles.downloadBtnBox}>
        <a
          href={`../docs/${file}/${file}.xls`}
          download={`${file}.xls`}
          onClick={buttonClick}
        >
          <button className={styles.excelBtn}>
            <img src="../images/excel.jpg"></img>
          </button>
        </a>
        <a
          href={`../docs/${file}/${file}.doc`}
          download={`${file}.doc`}
          onClick={buttonClick}
        >
          <button className={styles.wordBtn}>
            <img src="../images/word.png"></img>
          </button>
        </a>
        <a
          href={`../docs/${file}/${file}.hwp`}
          download={`${file}.hwp`}
          onClick={buttonClick}
        >
          <button className={styles.hangulBtn}>
            <img src="../images/hangul.jpg"></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContentList;
