import InquiryForm from './InquiryForm';
import './inquiry.css';

export default function Inquiry() {
  return (
    <div className="inquiry-page">
      <div className="inquiry-description">
        <h2>
          이용에 대해 문의를 남겨주시면<br />
          담당자가 빠르게 연락드리겠습니다.
        </h2>
        <div className="inquiry-logo-box">
          <h3 className="inquiry-logo">Aigora</h3>
          <p>
            AigoraAI가 이끄는 지혜의 광장,<br />
            차세대 몰입형 AI 기업교육 솔루션
          </p>
        </div>
      </div>
      <InquiryForm />
    </div>
  );
}