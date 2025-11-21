export default function InquiryForm() {
  return (
    <div className="inquiry-form">
      <form>
        <div className="form-row">
          <input type="text" placeholder="성함" />
          <input type="text" placeholder="소속" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="직급/직책" />
          <input type="email" placeholder="이메일" defaultValue="example@newxphere.com" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="연락처" defaultValue="010-0000-0000" />
          <input type="text" placeholder="사용 유형" defaultValue="HR교육, 신입생 교육 등" />
        </div>
        <div className="form-row">
          <textarea placeholder="궁금하신 점을 남겨주세요." rows={4}></textarea>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" />
            개인정보 수집 및 이용 동의
          </label>
          <label>
            <input type="checkbox" />
            마케팅 활용 및 광고 수신 동의
          </label>
        </div>
        <button type="submit">문의하기</button>
      </form>
    </div>
  );
}
