// client/src/pages/BrochureForm.jsx
import { useForm } from "react-hook-form";
import axios from "axios";

export default function BrochureForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:4000/api/brochure", data);
      alert("제출이 완료되었습니다.");
      reset();
    } catch (err) {
      alert("오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
  <div className="brochure-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("client_name")} type="text" placeholder="성함" required />
      <input {...register("organization")} type="text" placeholder="소속" />
      <input {...register("job_grade")} type="text" placeholder="직급" />
      <input {...register("email")} placeholder="이메일" required type="email" />
      <label>
        <input type="checkbox" {...register("opt_in")} />
        마케팅 활용 및 광고 수신 동의
      </label>
      <button type="submit">소개서 신청하기</button>
    </form>
    </div>
  );
}