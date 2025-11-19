import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">
          <img src="/assets/images/NewXAigora.png" alt="Aigora Logo" className="navbar-logo-img" />
        </Link>
      </div>

      <div className="navbar-center">
        <div className="navbar-menu">
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              제품/서비스 ▾
            </button>
            {openMenu === "services" && (
              <div className="dropdown-menu">
                <Link to="/services/aigora">Aigora</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setOpenMenu(openMenu === "solution" ? null : "solution")}
            >
              솔루션 ▾
            </button>
            {openMenu === "solution" && (
              <div className="dropdown-menu">
                <Link to="/solution/institution">기업용</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setOpenMenu(openMenu === "introduction" ? null : "introduction")}
            >
              도입 문의 ▾
            </button>
            {openMenu === "introduction" && (
              <div className="dropdown-menu">
                <Link to="/introduction/brochure">소개서 받기</Link>
                <Link to="/introduction/inquiry">문의하기</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <div className="language-toggle">
          <span className="active-lang">KR</span> <span className="divider">|</span> <span className="inactive-lang">EN</span>
        </div>
        <button className="btn login-button">로그인</button>
        <button className="btn inquiry-button">문의하기</button>
      </div>
    </nav>
  );
}