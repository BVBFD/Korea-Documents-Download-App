import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footerBox}>
      <div className={styles.copyRightBox}>
        <span>© 2021 by Lee Seong Eun</span>
        <span> - All Right Reserved</span>
      </div>
      <div className={styles.rightFooterBox}>
        <div>
          <div>Email</div>
          <div>lsevina126@gamil.com</div>
        </div>
        <div className={styles.followLogoFooterBox}>
          <div>Follow</div>
          <div>
            <span>
              <i class="fab fa-linkedin"></i>
            </span>
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-github-square"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
