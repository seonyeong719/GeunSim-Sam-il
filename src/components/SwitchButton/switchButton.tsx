import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "styled-components";

interface SwitchButtonProps {
  label: string;
  onToggle: (checked: boolean) => void;
}

function SwitchButton({ label, onToggle }: SwitchButtonProps) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onToggle(newChecked); // 스위치 상태를 부모 컴포넌트로 전달
  };

  return (
    <Wrapper>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": label }}
        color="secondary"
      />
    </Wrapper>
  );
}

export default SwitchButton;

const Wrapper = styled.div`
  height: 2rem;
`;
