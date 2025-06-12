// src/components/MobileTab/MobileTab.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MobileTab.module.scss";

const MobileTab = () => {
  const { pathname } = useLocation();

  const tabItems = [
    { name: "홈", path: "/", icon: "🏠" },
    { name: "카테고리", path: "/categories", icon: "📂" },
    { name: "검색", path: "/search", icon: "🔍" },
    { name: "마이", path: "/mypage", icon: "👤" },
    { name: "장바구니", path: "/cart", icon: "🛒" },
  ];

  return (
    <nav className={styles.tabbar}>
      {tabItems.map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className={`${styles.tab} ${
            pathname === item.path ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileTab;
