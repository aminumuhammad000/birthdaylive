import styles from "./Sidebar.module.css";
import { FaHome, FaGift, FaCalendarAlt, FaComments } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import logo from "../../../assets/logo.png"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      
        <img src={logo} alt="logo" className={styles.logo}/>
       

      <div className={styles.navItem}  style={{ marginTop: "20px", color: "#392ecc" }}>
        <FaHome className={styles.icon} />
        <span className={styles.label}>Home</span>
      </div>
      <div className={styles.navItem}>
        <GiPartyPopper className={styles.icon} />
        <span className={styles.label}>Events</span>
      </div>
      <div className={styles.navItem}>
        <FaGift className={styles.icon} />
        <span className={styles.label}>Gifts</span>
      </div>
      <div className={styles.navItem}>
        <FaCalendarAlt className={styles.icon} />
        <span className={styles.label}>Calendar</span>
      </div>
      <div className={styles.navItem}>
        <FaComments className={styles.icon} />
        <span className={styles.label}>Messages</span>
      </div>

      <div className={styles.navItem} id={styles.logout} style={{ marginTop: "auto", paddingTop: "20px", color: "#ff4d4d" }}>
        <FiLogOut className={styles.icon} />
        <span className={styles.label}>logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
