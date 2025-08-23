import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./components/Header";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
       {/* Sidebar on the left */}
       <div className={styles.sidebar}>
      <Sidebar />
      </div>

      <section className={styles.main}>

      {/* <header className={styles.header}> */}
        <Header />
      {/* </header> */}

      {/* Hero Celebration */}
      <section className={styles.heroCard}>
        <p className={styles.countdown}>3 Days, 5 Hours until Aminu’s Birthday!</p>
        <h2 className={styles.title}>Aminu’s 25th Birthday Celebration!</h2>
        <button className={styles.joinBtn}>Join Celebration</button>
      </section>

      {/* Main Content Grid */}
      <div className={styles.grid}>
        {/* Wishes & Messages */}
        <section className={styles.card}>
          <h3>Wishes & Messages</h3>
          <ul className={styles.messages}>
            <li><b>Sarah:</b> Happy birthday, Aminu! Hope you have an amazing day!</li>
            <li><b>Mark:</b> Wishing you all the best as you celebrate!</li>
            <li><b>Lisa:</b> Can’t wait to celebrate with you!</li>
          </ul>
          <input
            type="text"
            placeholder="Leave a Birthday Wish"
            className={styles.input}
          />
        </section>

        {/* Live Celebration */}
        <section className={styles.card}>
          <h3>Live Celebration</h3>
          <div className={styles.liveBox}>[ Live Stream Here 🎥 ]</div>
          <div className={styles.reactions}>
            <span>👏</span> <span>😲</span> <span>😂</span> <span>🎂</span>
          </div>
        </section>
      </div>

      {/* Bottom Sections */}
      <div className={styles.grid}>
        <section className={styles.card}>
          <h3>Memory Album</h3>
          <div className={styles.album}>
            <div className={styles.albumPic}></div>
            <div className={styles.albumPic}></div>
            <div className={styles.albumPic}></div>
          </div>
          <button className={styles.downloadBtn}>Download All Memories</button>
        </section>

        <section className={styles.card}>
          <h3>Digital Gifts 🎁</h3>
          <div className={styles.gifts}>
            <span>🛍️</span> <span>🎁</span> <span>🎀</span> <span>🎉</span>
          </div>
        </section>
      </div>

      {/* Reactions Control */}
      <section className={styles.card}>
        <h3>Reactions</h3>
        <div className={styles.reactionRow}>
          <span>👏 Clap</span>
          <span>😲 Ohhh</span>
          <span>😂 Laugh</span>
          <span>🎂 Celeb</span>
        </div>
        <label className={styles.toggle}>
          <input type="checkbox" defaultChecked />
          Allow sound reactions
        </label>
      </section>
      </section>
    </div>
  );
};

export default Dashboard;
