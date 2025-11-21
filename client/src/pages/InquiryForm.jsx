import { useForm } from "react-hook-form";
import axios from "axios";


export default function InquiryForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/inquiry`, data);
      alert("제출이 완료되었습니다.");
      reset();
    } catch (err) {
      alert("오류가 발생했습니다.");
      console.error(err);
    }
  };

  
  return (
    <div className="inquiry-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <input {...register("client_name")} type="text" placeholder="성함*" required/>
          <input {...register("organization")} type="text" placeholder="소속" />
        </div>
        <div className="form-row">
          <input {...register("job_grade")} type="text" placeholder="직급/직책" />
          <input {...register("email")} type="email" placeholder="이메일*" required/>
        </div>
        <div className="form-row">
          <input {...register("contact")} type="text" placeholder="연락처 (010-0000-0000)" />
          <input {...register("`usage`")} type="text" placeholder="사용 유형 (HR교육, 신입생 교육 등)" />
        </div>
        <div className="form-row">
          <textarea {...register("inquiry_message")} placeholder="궁금하신 점을 남겨주세요." rows={4}></textarea>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required/>
            개인정보 수집 및 이용 동의*
          </label>
          <label>
            <input {...register("opt_in")} type="checkbox" />
            마케팅 활용 및 광고 수신 동의
          </label>
        </div>
        <button type="submit">문의하기</button>
      </form>
    </div>
  );
}
