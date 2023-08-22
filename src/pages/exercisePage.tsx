import SwitchButton from "@components/SwitchButton/switchButton";
import { useCategoryList } from "@hooks/Query/useCategoryList";
import { useEquipmentList } from "@hooks/Query/useEquipmentList";
import { BasicSetting } from "@styles/common";
import { styled } from "styled-components";

function ExercisePage() {
  const { data } = useCategoryList();
  const { data: eqData } = useEquipmentList();
  console.log(data?.results);
  console.log(eqData?.results);
  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SwitchWrap>
          <S.CategoryWrap>
            <S.Names>카테고리</S.Names>
            <S.SwitchList>
              {data?.results.map((el: { name: string }) => (
                <S.Div>
                  <S.SwitchName>{el.name}</S.SwitchName>
                  <SwitchButton />
                </S.Div>
              ))}
            </S.SwitchList>
          </S.CategoryWrap>
          <S.EquipmentWrap>
            <S.Names>운동 장비</S.Names>
            <S.SwitchList>
              {eqData?.results.map((e: { name: string }) => (
                <S.Div>
                  <S.SwitchName>{e.name}</S.SwitchName>
                  <SwitchButton />
                </S.Div>
              ))}
            </S.SwitchList>
          </S.EquipmentWrap>
        </S.SwitchWrap>
        <S.ListWrap>
          <div>리스트</div>
        </S.ListWrap>
      </S.Wrapper>
    </S.Wrap>
  );
}
export default ExercisePage;

const Wrap = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  ${BasicSetting}
  display: flex;
  margin-top: 4rem;
`;

const SwitchWrap = styled.div``;
const CategoryWrap = styled.div``;
const EquipmentWrap = styled.div``;
const Names = styled.span`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const SwitchList = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 16rem;
  margin: 1rem 0 2rem 0;
`;

const ListWrap = styled.div`
  background-color: yellow;
  margin: 2.8rem 0 0 5rem;
`;

const SwitchName = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
  color: ${({ theme }) => theme.PALETTE.fontColor[200]};
  margin: 0.5rem 0.8rem;
`;

const S = {
  Wrap,
  Wrapper,
  SwitchWrap,
  CategoryWrap,
  EquipmentWrap,
  Names,
  Div,
  SwitchList,
  ListWrap,
  SwitchName,
};
