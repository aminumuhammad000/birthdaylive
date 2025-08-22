import styles from "./RegisterPage.module.css";
import AuthCard from "./AuthCard";

type AuthPageType = "login" | "register" | "forget" | "otp";
interface ForgetProps {
    setIsLogin: (page: AuthPageType) => void;
}
const Forget: React.FC<ForgetProps> = ({setIsLogin}) => {
    return(
        <>
        <AuthCard title="Reset Password" subtitle="Enter your email to get a 6-digit OTP.">
            <div className={styles.form}>
            <input type="email" placeholder="Email" className={styles.input} />
            <button type="submit" className={styles.primaryBtn}>send OTP via email</button>
            </div>

            <p className={styles.text} onClick={() => setIsLogin("login")} style={{cursor: "pointer"}}>Back to Login</p>
        </AuthCard>
        </>
    )
}
export default Forget;