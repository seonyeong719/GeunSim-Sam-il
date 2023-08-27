import { BasicSetting, FlexAllCenter } from "@styles/common";
import { styled } from "styled-components";
import { GrRefresh } from "react-icons/gr";
import { RadioBtn } from "./Components/radioGroup";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue } from "@type/formType";
import { BmiSchema } from "consts/bmiYup";
import { yupResolver } from "@hookform/resolvers/yup";
import BmiInput from "./Components/bmiInput";

const BmiPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValue>({ resolver: yupResolver(BmiSchema) });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <S.Wrapper>
      <S.Wrap onSubmit={handleSubmit(onSubmit)}>
        <S.Title>BMI</S.Title>
        <S.SelectBox>
          <S.RefreshBtn>
            <GrRefresh />
          </S.RefreshBtn>
          <S.Gender>
            <RadioBtn />
          </S.Gender>
        </S.SelectBox>
        <S.InputBoxWrap>
          <BmiInput
            label="신장(cm)"
            name="height"
            control={control}
            errors={errors}
            placeholder="height"
          />
          <BmiInput
            label="체중(kg)"
            name="weight"
            control={control}
            errors={errors}
            placeholder="weight"
          />
          <BmiInput
            label="나이(만)"
            name="age"
            control={control}
            errors={errors}
            placeholder="age"
          />
        </S.InputBoxWrap>
        <S.Button>계산하기</S.Button>
      </S.Wrap>
    </S.Wrapper>
  );
};
export default BmiPage;

const Wrapper = styled.div`
  ${BasicSetting}
  ${FlexAllCenter}
`;

const Wrap = styled.form`
  width: 50%;
  height: 50rem;
  margin-top: 3.5rem;
  box-shadow: 5px 5px 5px 5px #d9d9d9;
  border-radius: 1rem;
  padding: 3.5rem;
`;

const Title = styled.div`
  border-bottom: 0.5rem solid ${({ theme }) => theme.PALETTE.primary[100]};
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.PALETTE.fontColor[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const RefreshBtn = styled.div`
  font-size: 1.5rem;
  border: 0.3rem solid ${({ theme }) => theme.PALETTE.primary[100]};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Gender = styled.div``;

const InputBoxWrap = styled.div`
  padding: 2rem 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  width: 7rem;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
  border: none;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.hover};
  }
`;

const S = {
  Wrapper,
  Wrap,
  Title,
  SelectBox,
  RefreshBtn,
  Gender,
  InputBoxWrap,
  Button,
};
