import React from "react";
import styles from "./contentList.module.css";

const ContentList = ({ file }) => {
  console.log(file);
  return (
    <div className={styles.docsContent}>
      <div className={styles.docsContentTitle}>{file}</div>
      <div className={styles.downloadBtnBox}>
        <a href={`../docs/${file}/${file}.xls`} download={`${file}.xls`}>
          <button className={styles.excelBtn}>
            <img src="../images/excel.jpg"></img>
          </button>
        </a>
        <a href={`../docs/${file}/${file}.doc`} download={`${file}.doc`}>
          <button className={styles.wordBtn}>
            <img src="../images/word.png"></img>
          </button>
        </a>
        <a href={`../docs/${file}/${file}.hwp`} download={`${file}.hwp`}>
          <button className={styles.hangulBtn}>
            <img src="../images/hangul.jpg"></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContentList;
