import "../pages/home.css"

export default function InquiryLinkFooter(){
    return(
        <div className="home-inquiry-link">
            <div className = "home-inquiry-link-box">
                <h3>AIGORA 도입과 이용에 대해<br />궁금하신가요?</h3>
                <button className="link-brochure-button">소개서 받기</button>
                <button className = "link-inquiry-button">문의하기</button>
            </div>
        </div>
    )
}