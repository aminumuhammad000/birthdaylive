import React from "react";
import styles from "./RegisterPage.module.css";
import AuthCard from "./AuthCard";

type AuthPageType = "login" | "register" | "forget" | "otp";
interface RegisterProps {
  setIsLogin: (page: AuthPageType) => void;
}
const Register: React.FC<RegisterProps> = ({ setIsLogin }) =>{
    return(
        <>
         <AuthCard title="Create your account" subtitle="Join the fun, live!">
            <div className={styles.form}>
          <input type="text" placeholder="Full Name" name="name" className={styles.input} />
          <input type="email" placeholder="Email" name="email" className={styles.input} />
          <input type="password" placeholder="Password" name="password" className={styles.input} />

          <button type="submit" className={styles.primaryBtn}>Register</button>
          <button type="button" className={styles.googleBtn}>Continue with Google</button>
        </div>

        <p className={styles.text}>
          Already have an account? <span className={styles.link} onClick={() => setIsLogin("login")}>Login</span>
        </p>
        </AuthCard>
        </>
    )
}
export default Register;