import MacVideo from "../components/MacVideo"
import InquiryLinkFooter from "../components/InquiryLinkFooter"
import './aigora.css'

export default function Aigora(){
    return(
        <div className = "aigora">
            <MacVideo/>

            <div className = "aigora-orange-section">
                <h3>AI로 완성하는 차세대 기업교육 플랫폼, AIGORA<br/>
                교육 운영의 부담을 줄이고, <br/>
                참여율과 몰입도를 동시에 높입니다.</h3>
            </div>

            {/* 섹션 1~4 (반복됨)*/}
            {/* 섹션 1*/}
            <div className = "aigora-sec">
                <p>슬라이드 이론 교육</p>
                <h3>자연스러운 흐름으로 TTS음성과 함께<br/>
                    자동으로 넘어가는 강의 슬라이드는<br/>
                    학습자의 이해를 돕습니다.
                </h3>
                <img src="/assets/images/aigora-sec1.png" alt="CJ 도너스캠프" className="aigora-sec-image"/>
            </div>
            {/* 섹션 2*/}
            <div className = "aigora-sec">
                <p>AI 실시간 토론</p>
                <h3>AI가 주제를 제안하고 참여를 유도해,<br/>
                    모든 구성원이 능동적으로 <br/>
                    의견을 나눌 수 있습니다.
                </h3>
                <img src="/assets/images/aigora-sec2.png" alt="CJ 도너스캠프" className="aigora-sec-image"/>
            </div>
            {/* 섹션 3*/}
            <div className = "aigora-sec">
                <p>게이미피케이션 & 퀴즈</p>
                <h3>배지, 랭킹, 점수 시스템으로 <br/>
                    몰입도를 높이고, 게임처럼 즐기는 <br/>
                    교육 경험을 제공합니다.
                </h3>
                <img src="/assets/images/aigora-sec3.png" alt="CJ 도너스캠프" className="aigora-sec-image"/>
            </div>
            {/* 섹션 4*/}
            <div className = "aigora-sec">
                <p>대시보드 & 리포트</p>
                <h3>학습 결과와 참여 데이터를 시각화하여,<br/>
                    교육 성과를 한눈에 확인할 수 있습니다.
                </h3>
                <img src="/assets/images/aigora-sec4.png" alt="CJ 도너스캠프" className="aigora-sec-image"/>
            </div>
            {/* 섹션 5*/}
            <div className = "aigora-sec">
                <p>영상 & TTS</p>
                <h3>실제 사례 중심의 시나리오 영상으로,<br/>
                    몰입감있는 영상 시청 경험과 <br/>
                    학습의 시작을 제공합니다.
                </h3>
                <img src="/assets/images/aigora-sec5.png" alt="CJ 도너스캠프" className="aigora-sec-image"/>
            </div>

            <InquiryLinkFooter/>
        </div>
    )
}