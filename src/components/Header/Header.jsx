// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (isNowMobile) setShowCategories(false); // 모바일일 땐 닫기
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {!isMobile && (
          <button
            className={styles.menuBtn}
            onClick={() => setShowCategories(!showCategories)}
          >
            ☰ 카테고리
          </button>
        )}

        <h1 className={styles.logo}>ReactShop</h1>

        {isMobile && (
          <div className={styles.mobileIcons}>
            <Link to="/recent" className={styles.iconBtn}>
              👁️
            </Link>
            <Link to="/notice" className={styles.iconBtn}>
              🔔
            </Link>
          </div>
        )}

        {/* ✅ 모바일일 땐 아래 줄로 따로 빼기 */}
        <div className={styles.searchWrapper}>
          <input className={styles.search} placeholder="검색어를 입력하세요" />
        </div>

        {!isMobile && (
          <div className={styles.right}>
            <button>로그인</button>
            <button>장바구니</button>
          </div>
        )}
      </div>

      {/* PC: 좌측 카테고리 메뉴 */}
      {!isMobile && (
        <div
          className={`${styles.categoryMenu} ${
            showCategories ? styles.open : ""
          }`}
        >
          <ul>
            <li>
              <span>👗 패션의류/잡화</span>
              <ul className={styles.submenu}>
                <li>여성의류</li>
                <li>남성의류</li>
                <li>신발</li>
              </ul>
            </li>
            <li>
              <span>💄 뷰티</span>
              <ul className={styles.submenu}>
                <li>스킨케어</li>
                <li>메이크업</li>
              </ul>
            </li>
            <li>
              <span>🥬 식품</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
