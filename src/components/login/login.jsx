import React from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService, usersHistory, setUsersHistory }) => {
  const navigate = useNavigate();
  const goToSearchPage = (userId) => {
    navigate({
      pathname: `/search/${userId}`,
      state: userId,
    });
  };

  const onLogin = (event) => {
    if (event.target.innerText) {
      authService
        .login(event.target.innerText)
        .then((data) => {
          const users = usersHistory.map((data) => data.user);
          console.log(users.indexOf(data.user.uid));
          if (users.indexOf(data.user.uid) === -1) {
            const usersHistoryUpdate = [
              ...usersHistory,
              { user: data.user.uid, userHistory: [] },
            ];
            console.log(usersHistoryUpdate);
            setUsersHistory(usersHistoryUpdate);
          }
          goToSearchPage(data.user.uid);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <section className={styles.loginBox}>
      <h1 className={styles.logoHeaderBox}>
        <img src="./images/Logo-big.png" />
        <h2>Log-In</h2>
      </h1>
      <div onClick={onLogin} className={styles.loginBoxGoogle}>
        Google
      </div>
      <div onClick={onLogin} className={styles.loginBoxGithub}>
        Github
      </div>
    </section>
  );
};

export default Login;
