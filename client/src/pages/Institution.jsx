import Improving from "../components/Improving"
import InquiryLinkFooter from "../components/InquiryLinkFooter"
import './institution.css'

export default function Institution(){
    return(
        <div className = "institution">
            <Improving/>
            <div className="institution-section">
                <h3 className="section-heading">교육 목표와 브랜드 아이덴티티에 맞춘 <br/>맞춤형 AI 교육 콘텐츠를 제작합니다.</h3>
                <p className="section-p">기업 맞춤 AI 교육 콘텐츠는 다음 단계를 통해 완성됩니다.<br/>문의부터 최종 전달까지, AIGORA가 전 과정을 함께합니다.</p>
                <div className="steps">
                    <div className="step1">
                        <h4 className="step-heading">① 문의 및 상담</h4>
                        <p className="step-p">담당자와의 연락을 통해 대략적인 요구사항을 전달받은 뒤,<br/>
                        미팅을 통해 기업의 교육 목적과 대상, 진행 형태를 파악합니다.</p>
                        <p className="step-description">📩 AIGORA 문의남기기</p>
                    </div>
                    <img className="arrow" src="/assets/images/icons/arrow.svg"></img>
                    <div className="step2">
                        <h4 className="step-heading">② 1차 미팅 : 방향 설정</h4>
                        <p className="step-p">교육 목표를 정의하고, 콘텐츠 구성과 디자인 방향을 제안합니다.<br/>
                            기업의 로고·폰트·이론 자료 등 브랜드 관련 자료를 전달받습니다.</p>
                        <p className="step-description">💬 교육 콘셉트 & 기획안 공유 <span/> 📩 기업 자료 전달</p>
                    </div>
                    <img className="arrow" src="/assets/images/icons/arrow.svg"></img>
                    <div className="step3">
                        <h4 className="step-heading">③  커스텀 디자인 & 시안 제작</h4>
                        <p className="step-p">기업 브랜드 컬러와 톤앤매너를 반영하여<br/>
                            AI 학습 콘텐츠와 인터랙션을 커스텀 제작합니다.</p>
                        <p className="step-description">🎨 브랜딩 기반 맞춤 디자인</p>
                    </div>
                    <img className="arrow" src="/assets/images/icons/arrow.svg"></img>
                    <div className="step4">
                        <h4 className="step-heading">④ 2차 미팅 : 시안 공유</h4>
                        <p className="step-p">AIGORA가 제안한 시안을 기반으로 피드백을 반영합니다.<br/>
                            2차 미팅에서 구체적인 수정 방향을 확정합니다.</p>
                        <p className="step-description">🔁 디자인 & 내용 수정 협의</p>
                    </div>
                    <img className="arrow" src="/assets/images/icons/arrow.svg"></img>
                    <div className="step5">
                        <h4 className="step-heading">⑤ 테스트 & 최종 납품</h4>
                        <p className="step-p">완성된 콘텐츠를 검수하고 테스트를 진행한 뒤,<br/>
                            최종본을 전달드립니다. 필요 시 기술적 지원도 함께 제공합니다.</p>
                        <p className="step-description">🚀 최종 배포 & 기술 지원</p>
                    </div>
                </div>
            </div>
            <InquiryLinkFooter/>
        </div>
    )
}