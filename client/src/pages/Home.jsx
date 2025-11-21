import Navbar from "../components/Navbar"
import MacVideo from "../components/MacVideo"
import InquiryLinkFooter from "../components/InquiryLinkFooter"
import Improving from "../components/Improving"
import "./home.css"

export default function Home(){
    return(
        <div className="home">
            {/* 인트로 영역: 타이틀, 설명, CTA 버튼, 캐릭터 일러스트 */}
            <div className="home-intro">
                <div className="home-intro-left">
                    <h1>AI교육의 진화는<br />AIGORA와 함께 시작됩니다.</h1>
                    <p>AI가 진행하고, 사람은 몰입합니다.<br/>AIGORA는 토론과 참여로 완성되는 차세대 기업교육 플랫폼입니다.</p>
                    <div className = "intro-buttons">
                        <button
                          className="intro-brochure-button"
                          onClick={() => window.location.href = "/introduction/brochure"}
                        >
                          소개서 받기
                        </button>
                        <button className = "intro-inquiry-button"
                        onClick={() => window.location.href = "/introduction/inquiry"}>문의하기</button>
                    </div>
                </div>
                <img src="/assets/images/ai-illust.png" alt="AI 캐릭터" />
            </div>

            {/* 동영상 데모 섹션 */}
            <MacVideo/>

            {/* 어떤 조직에게 맞는지: 사용자 유형 4개 */}
            <div className="home-instruction">
                <h2>AIGORA는<br />이런 조직에게 딱 맞습니다.</h2>
                <p>AI 기반의 교육이 필요한 모든 기업을 위해 만들어졌습니다.<br/>
                    인사·교육 담당자부터 임직원까지, 누구나 쉽고 몰입감 있게 학습할 수 있습니다.</p>
                <div className="user-types">
                  <div>
                    <img src="/assets/images/user-hr.jpg" alt="인사·교육 담당자" />
                    <div className="user-type-content">
                      <h3>인사·교육 담당자</h3>
                      <p>AI가 교육 기획부터 성과 분석까지 자동화해<br />업무 효율을 높여드립니다.</p>
                    </div>
                  </div>
                  <div>
                    <img src="/assets/images/user-leader.jpg" alt="기업 러닝리더" />
                    <div className="user-type-content">
                      <h3>기업 리더·관리자</h3>
                      <p>조직의 성장 데이터를 기반으로, 구성원의 <br/>역량 변화를 한눈에 파악할 수 있습니다.</p>
                    </div>
                  </div>
                  <div>
                    <img src="/assets/images/user-worker.jpg" alt="업직종 학습자" />
                    <div className="user-type-content">
                      <h3>임직원·학습자</h3>
                      <p>듣는 교육이 아닌, 참여하는 학습으로, 퀴즈·토론·<br/>게임형 미션을 통해 자연스럽게 배우고 성취를 <br/>경험합니다.</p>
                    </div>
                  </div>
                  <div>
                    <img src="/assets/images/user-univ.jpg" alt="대학 신입생 교육 관계자" />
                    <div className="user-type-content">
                      <h3>대학 신입생 교육 관계자</h3>
                      <p>AI 기반 참여형 콘텐츠로 신입생 OTD와<br/>핵심 역량 교육을 혁신할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
            </div>

            {/* 작동 방식 설명 카드형 6개 */}
            <div className="home-work">
                <div className="work-header">
                    <div className="work-header-left">
                        <h2>AIGORA는<br />이렇게 작동합니다.</h2>
                        <p>영상·퀴즈·토론을 하나의 흐름으로 연결하는 AI 교육 솔루션입니다.<br />
                        AIGORA는 학습 참여를 높이고, 교육자와 학습자 모두에게 새로운 경험을 제공합니다.</p>
                    </div>
                    <button className="work-more-button"
                    onClick={() => window.location.href = "/services/aigora"}>더 알아보기 →</button>
                </div>

                <div className="work-cards">
                    <div className="work-card">
                        <img src="/assets/images/work-slide.png" alt="슬라이드 이론 교육" />
                        <div className="work-card-text">
                            <h3>슬라이드 이론 교육</h3>
                            <p>#자동슬라이드 #TTS음성강의<br/>#자연스러운학습흐름 #이해도상승</p>
                        </div>
                    </div>
                    <div className="work-card">
                        <img src="/assets/images/work-discussion.png" alt="AI 실시간 토론" />
                        <div className="work-card-text">
                            <h3>AI 실시간 토론</h3>
                            <p>#AI토론 #주제제안 #참여유도 <br/>#능동적학습 #의견공유 #팀커뮤니케이션</p>
                        </div>
                    </div>
                    <div className="work-card">
                        <img src="/assets/images/work-quiz.png" alt="게이미피케이션 & 퀴즈" />
                        <div className="work-card-text">
                            <h3>게이미피케이션 & 퀴즈</h3>
                            <p>#게이미피케이션 #배지랭킹점수 #몰입형학습 <br/>#재미있는교육 #학습동기UP</p>
                        </div>
                    </div>
                    <div className="work-card-row">
                        <div className="work-card">
                            <img src="/assets/images/work-dashboard.png" alt="대시보드 & 리포트" />
                            <div className="work-card-text">
                                <h3>대시보드 & 리포트</h3>
                                <p>#데이터시각화 #학습리포트 #성과분석 <br/>#참여데이터 #한눈에보는교육결과</p>
                            </div>
                        </div>
                        <div className="work-card">
                            <img src="/assets/images/work-video.png" alt="영상 & TTS" />
                            <div className="work-card-text">
                                <h3>영상 & TTS</h3>
                                <p>#시나리오영상 #사례기반학습 <br/>#현장감있는교육 #토론시작 #실전학습</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* 고객사 로고 및 후기 */}
            <Improving/>


            {/* CTA 링크 영역 */}
            <InquiryLinkFooter/>
        </div>
    )
}