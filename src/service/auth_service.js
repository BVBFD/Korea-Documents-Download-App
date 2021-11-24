import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor(app) {
    this.auth = getAuth(app);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    let provider;
    if (providerName === "Google") {
      provider = this.googleProvider;
    }
    if (providerName === "Github") {
      provider = this.githubProvider;
    }
    return signInWithPopup(this.auth, provider);
    // 파이어 베이스 콘솔에서 반드시 이메일 계정 여러개 허용 클릭해주어야 함..
  }

  logout() {
    this.auth.signOut();
  }
}

export default AuthService;
