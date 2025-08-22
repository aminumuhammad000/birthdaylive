import React, { type ReactNode } from "react";
import styles from "./AuthCard.module.css";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </div>
  );
};

export default AuthCard;
