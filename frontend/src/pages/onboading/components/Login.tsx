import styles from "./RegisterPage.module.css";

import AuthCard from "./AuthCard";
type AuthPageType = "login" | "register" | "forget" | "otp";
interface LoginProps {
    setIsLogin: (page: AuthPageType) => void;
}
const Login: React.FC<LoginProps> = ({ setIsLogin}) =>{
    return(
      <>
        <AuthCard title="Welcome back" subtitle="Login to join your party live!">
        <div className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />

          <button type="submit" className={styles.primaryBtn}>Login</button>
          <button type="button" className={styles.googleBtn}>Continue with Google</button>
        </div>


        <p className={styles.text} onClick={() => setIsLogin("forget")} style={{cursor: "pointer"}}>Forgot Password?</p>
        <p className={styles.text}>
          Don’t have an account? <span className={styles.link} onClick={() => setIsLogin("register")} >Register</span>
        </p>
        </AuthCard>
        </>

    )
}
export default Login;