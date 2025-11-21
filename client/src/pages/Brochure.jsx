import BrochureForm from './BrochureForm';
import './brochure.css'

export default function Brochure() {
  return (
    <div className="brochure-page">
      <div className="brochure-description">
        <img
          src="/assets/images/robot.png"
          alt="로봇 일러스트"
          className="brochure-illustration"
        />
        <h2>서비스 소개서를<br />받아보세요.</h2>
        <p>
          ‘AIGORA’ 서비스 소개서와<br />
          NewXphere에 대한 기업소개까지,<br />
          보다 구체적인 내용이 들어간 소개서를 바로 확인해보세요.
        </p>
      </div>
      <BrochureForm />
    </div>
  );
}