import { BasicSetting } from "@styles/common";
import { styled } from "styled-components";

function HomePage() {
  return (
    <S.Wrap>
      <S.Wrapper>home Page</S.Wrapper>
    </S.Wrap>
  );
}
export default HomePage;

const Wrap = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  ${BasicSetting}
  background-color: red;
`;

const S = {
  Wrap,
  Wrapper,
};
