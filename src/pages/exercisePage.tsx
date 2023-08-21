import { BasicSetting } from "@styles/common";
import { styled } from "styled-components";

function ExercisePage() {
  return (
    <S.Wrapper>
      <S.SwitchWrap>
        <S.CategoryWrap>
          <S.Name>카테고리</S.Name>
          <div></div>
        </S.CategoryWrap>
        <S.EquipmentWrap>
          <S.Name>운동 장비</S.Name>
          <div></div>
        </S.EquipmentWrap>
      </S.SwitchWrap>
      <div>리스트</div>
    </S.Wrapper>
  );
}
export default ExercisePage;

const Wrapper = styled.div`
  background-color: red;
  ${BasicSetting}
`;

const SwitchWrap = styled.div``;
const CategoryWrap = styled.div``;
const EquipmentWrap = styled.div``;
const Name = styled.span``;

const S = {
  Wrapper,
  SwitchWrap,
  CategoryWrap,
  EquipmentWrap,
  Name,
};
