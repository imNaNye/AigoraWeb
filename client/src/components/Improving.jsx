import "./improving.css"


export default function Improving(){
    return (
      <div className="home-customer">
        <h2>고객과 함께 성장하고 있습니다</h2>
        <p className="home-customer-para">
          함께 고민하고, 함께 변화합니다.
          <br />
          <strong>AIGORA</strong>는 고객의 성장을 곧 우리의 성장으로 생각합니다.
        </p>
        <div className="customer-carousel">
          <div className="customer-card">
            <img src="/assets/images/customer-logo.png" alt="CJ 도너스캠프" className="customer-logo" />
            <div className="customer-profile">
                <p className="customer-name">CJ 도너스캠프</p>
                <p className="customer-role">○○ 소속 ○○○ 과장</p>
            </div>
            <blockquote>
              “후기 내용. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타”
            </blockquote>
            <div className="customer-tags">
              <span>기업</span>
              <span>신입 교육</span>
            </div>
          </div>
          {/* 복제 카드 */}
          <div className="customer-card">
            <img src="/assets/images/customer-logo.png" alt="CJ 도너스캠프" className="customer-logo" />
            <div className="customer-profile">
                <p className="customer-name">CJ 도너스캠프</p>
                <p className="customer-role">○○ 소속 ○○○ 과장</p>
            </div>
            <blockquote>
              “후기 내용. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타”
            </blockquote>
            <div className="customer-tags">
              <span>기업</span>
              <span>신입 교육</span>
            </div>
          </div>
          {/* 복제 카드 */}
          <div className="customer-card">
            <img src="/assets/images/customer-logo.png" alt="CJ 도너스캠프" className="customer-logo" />
            <div className="customer-profile">
                <p className="customer-name">CJ 도너스캠프</p>
                <p className="customer-role">○○ 소속 ○○○ 과장</p>
            </div>
            <blockquote>
              “후기 내용. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타. 다람쥐 헌 쳇바퀴에 올라타”
            </blockquote>
            <div className="customer-tags">
              <span>기업</span>
              <span>신입 교육</span>
            </div>
          </div>
        </div>
      </div>
    )
}