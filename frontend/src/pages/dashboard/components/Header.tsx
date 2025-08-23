// Header.tsx
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import styles from "./Header.module.css";
import { MdArrowDropDown } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.avatarWrapper}>
        <div className={styles.avatarContainer}>
        <FaUserCircle 
          size={32} 
          className={styles.avatar} 
          onClick={() => setOpen(!open)} 
        />
        {<MdArrowDropDown onClick={() => setOpen(!open)} className={styles.dropdownArrow}/>}
            {/* {open && < onClick={() => setOpen(!open)} className={styles.dropdownArrow}/>} */}
        </div>

        {open && (
          <div className={styles.dropdown}>
             <button className={styles.item}>
              <FaUserCircle /> Profile
            </button>
            <button className={styles.item}>
              <FiSettings /> Settings
            </button>
            <button className={styles.item} style={{color: "#ff4d4d"}}>
              <FiLogOut /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
