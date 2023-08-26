import * as yup from "yup";

export const BmiSchema = yup.object().shape({
  height: yup
    .number()
    .required("신장(키)은 필수 입력입니다.")
    .min(2, "최소2자 이상 입력해주세요")
    .typeError("신장(키)은 숫자로 입력해주세요."),
  weight: yup.number().required("체중은 필수 입력입니다.").typeError("체중은 숫자로 입력해주세요."),
  age: yup
    .number()
    .required("나이은 필수 입력입니다.")
    .max(100, "100이하 값을 입력해주세요.")
    .typeError("나이는 숫자로 입력해주세요."),
});
