// client/src/pages/BrochureForm.jsx
import { useForm } from "react-hook-form";
import axios from "axios";

function BrochureForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("client_name")} placeholder="이름" required />
      <input {...register("email")} placeholder="이메일" required type="email" />
      <input {...register("organization")} placeholder="소속" />
      <input {...register("job_grade")} placeholder="직급" />
      <input {...register("request_type")} placeholder="요청 유형" />
      <label>
        <input type="checkbox" {...register("opt_in")} />
        마케팅 수신 동의
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default BrochureForm;