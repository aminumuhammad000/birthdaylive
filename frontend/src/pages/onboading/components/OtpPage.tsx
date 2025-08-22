import React, { useState } from "react";
import AuthCard from "./AuthCard";
import styles from "./RegisterPage.module.css";

type AuthPageType = "login" | "register" | "forget" | "otp";
interface OtpPageProps {
  setIsLogin: (page: AuthPageType) => void;
  email?: string; // Optional prop to pass email if needed
}
const OtpPage: React.FC<OtpPageProps> = ({ setIsLogin, email }) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <AuthCard
        title="Login with OTP"
        subtitle={`Enter the code sent to ${email}`}  
      >
    
          <div className={styles.form}>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.primaryBtn}>
              Verify & Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin("forget")}
              className={styles.secondaryBtn}
            >
              Change Email
            </button>
          </div>
        

        <p className={styles.text}>
          Prefer password login?{" "}
          <span className={styles.link} onClick={() => setIsLogin("login")}>
            Login
          </span>
        </p>
      </AuthCard>
    </>
  );
};

export default OtpPage;
