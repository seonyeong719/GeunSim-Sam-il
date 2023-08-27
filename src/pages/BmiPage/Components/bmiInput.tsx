import { ErrorMessage } from "@hookform/error-message";
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
    <InputWrap>
      <InputWrapper>
        <ItemWrap>
          <span>{label}</span>
        </ItemWrap>
        <InputBoxWrap>
          <Controller
            name={name}
            control={control}
            render={({ field }) => <input {...field} {...children} />}
          />
        </InputBoxWrap>
      </InputWrapper>
      {errors && (
        <div style={{ color: "red" }}>
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </InputWrap>
  );
};
export default BmiInput;

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ItemWrap = styled.div`
  display: flex;
  width: 20%;
  & > span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > input {
    width: 100%;
    height: 10px;
    border: 1px solid beige;
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    padding: 20px;
    margin-left: 10px;
    padding-left: 10px;
  }
`;
