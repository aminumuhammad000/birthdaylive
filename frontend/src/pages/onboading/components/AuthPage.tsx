import React from "react";
import styles from "./RegisterPage.module.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Forget from "./Forget";
import OtpPage from "./OtpPage";
import birthdayVideo from '../../../assets/birthday.mp4';
import { Link } from "react-router-dom";

const AuthPage: React.FC = () => {
  type AuthPageType = "login" | "register" | "forget" | "otp";
  const [page, setPage] = useState<AuthPageType>("register");

   const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted for page:", page);
    if (page === "forget") {
      setPage("otp")
    }
   }

  return (
    <div className={styles.wrapper}>
      <Link to="/" id="link"><span className={styles.close}>X</span></Link>
      <video src={birthdayVideo} muted loop autoPlay className={styles.video}></video>
       <form className={styles.mainForm} onSubmit={(e) => handleFormSubmit(e)}>
        {page == "login" && <Login setIsLogin={setPage} /> }
        {page == "register" && <Register setIsLogin={setPage}/>}
        {page == "forget" && <Forget setIsLogin={setPage}/>}
        {page == "otp" && <OtpPage setIsLogin={setPage} email="aminumuhammad00015@gmail.com"/>}
      
   </form>
    </div>
  );
};

export default AuthPage;
