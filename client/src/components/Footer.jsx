import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-nav">
          <div className="footer-logo">
            <img src="/assets/images/Aigora.png" alt="Aigora Logo" className="footer-logo-img" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <div className="footer-heading">제품/서비스</div>
              <div>AIGORA 소개</div>
            </div>
            <div className="footer-column">
              <div className="footer-heading">솔루션</div>
              <div>기업</div>
              <div>대학</div>
            </div>
            <div className="footer-column">
              <div className="footer-heading">도입 문의</div>
              <div>소개서받기</div>
              <div>문의하기</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-middle">
        <div className="footer-company-info">
          <div><b>회사명</b> 주식회사 뉴엑스피어 (NewXphere Inc.)</div>
          <div><b>사업자번호</b> 382-81-03437</div>
          <div><b>설립</b> 2023.08.30</div>
          <div><b>대표자</b> 최현아</div>
          <div><b>주소</b> 경기도 용인시 기흥구 동백중앙로 191</div>
          <div><b>홈페이지</b> newxphere.com</div>
          <div className="footer-contact">
            <div><b>문의</b> newxphere@gmail.com</div>
            <div><span className="footer-label-placeholder"></span>010.5120.5615</div>
          </div>
        </div>
        <div className="footer-social-icons">
          <div>
            <img src="/assets/images/icons/jt-link.png" alt="homepage" />
            <div>Homepage</div>
          </div>
          <div>
            <img src="/assets/images/icons/jt-youtube.png" alt="youtube" />
            <div>Youtube</div>
          </div>
          <div>
            <img src="/assets/images/icons/jt-instagram.png" alt="instagram" />
            <div>Instagram</div>
          </div>
          <div>
            <img src="/assets/images/icons/jt-naver blog.png" alt="blog" />
            <div>Naver blog</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2025. NewXphere INC. All rights reserved.</div>
        <div className="footer-policy-links">
          <span>개인정보처리방침</span>
          <span>서비스이용약관</span>
        </div>
      </div>
    </footer>
  );
}