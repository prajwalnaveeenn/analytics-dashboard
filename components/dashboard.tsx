"use client";

import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
import Sidebar from "@/components/sidebar"; // Import Sidebar
import RightNav from "@/components/rightnav"; // Import RightNav

const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <h1 className={styles.title}>Welcome to the Analytics Dashboard!</h1>
      <p className={styles.subtitle}>By Prajwal N</p>

      {/* Sidebar & Right Nav */}
      <Sidebar />
      <RightNav />
      
      <div className={styles.aboutMe}>
        <h2><b>Summary</b></h2>
        <p>
          I'm a passionate developer with experience in backend 
          development using Java Spring Boot and frontend technologies like
          React, Next.js, TailwindCSS and TypeScript.<br /> This project is an effort from my
          side to implement api calls and exploring javascript's amazing features a bit more!<br />
          Please have a look around!<br/>
          <i>More features yet to be added ! :))</i>
        </p>
      </div>
      <br />
      {/* API Blocks */}
      <div className={styles.grid}>
        <Link href="/weather" className={`${styles.apiBlock} ${styles.weather}`}>
          <h2>Weather Forecast</h2>
          <p><i>Get weather updates based on location</i></p>
          <span>🌤️</span>
        </Link>

        <Link href="/news" className={`${styles.apiBlock} ${styles.news}`}>
          <h2>News</h2>
          <p><i>Browse the latest news articles</i></p>
          <span>📰</span>
        </Link>

        <Link href="/stocks" className={`${styles.apiBlock} ${styles.finance}`}>
          <h2>Stock Analysis</h2>
          <p><i>Track stock market data and trends</i></p>
          <span>📈</span>
        </Link>

        <Link href="/movies" className={`${styles.apiBlock} ${styles.movies}`}>
          <h2>Movies</h2>
          <p><i>Discover the latest movies and shows</i></p>
          <span>🎬</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
