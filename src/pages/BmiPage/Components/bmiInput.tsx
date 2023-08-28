import { ErrorMessage } from "@hookform/error-message";
import { FlexAlignCenter } from "@styles/common";
import { FormValue } from "@type/formType";
import { ReactNode } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import styled from "styled-components";

interface BmiInputProps {
  label: string;
  name: keyof FormValue;
  control: Control<FormValue>;
  errors: FieldErrors<FormValue>;
  placeholder: string;
  children?: ReactNode;
}

const BmiInput: React.FC<BmiInputProps> = ({ label, name, control, errors, ...children }) => {
  return (
    <S.InputWrap>
      <S.InputWrapper>
        <S.ItemWrap>
          <span>{label}</span>
        </S.ItemWrap>
        <S.InputBoxWrap>
          <Controller
            name={name}
            control={control}
            render={({ field }) => <input {...field} {...children} />}
          />
        </S.InputBoxWrap>
      </S.InputWrapper>
      {errors && (
        <div style={{ color: "red" }}>
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </S.InputWrap>
  );
};
export default BmiInput;

const InputWrap = styled.div`
  ${FlexAlignCenter}
  width: 100%;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  width: 100%;
  justify-content: end;
  ${FlexAlignCenter}
`;

const ItemWrap = styled.div`
  display: flex;
  width: 20%;
  & > span {
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

const InputBoxWrap = styled.div`
  ${FlexAlignCenter}
  width: 100%;
  & > input {
    width: 100%;
    height: 3rem;
    border: 2px solid ${({ theme }) => theme.PALETTE.gray[200]};
    border-radius: 0.3rem;
    margin: 0.8rem 0;
    display: flex;
    padding: 1.3rem;
    margin-left: 0.8rem;
    padding-left: 0.8rem;
  }
`;

const S = {
  InputWrap,
  InputWrapper,
  ItemWrap,
  InputBoxWrap,
};
