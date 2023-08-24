import SwitchButton from "@components/SwitchButton/switchButton";
import { useBaseInfoList } from "@hooks/Query/useBaseInfo";
import { useCategoryList } from "@hooks/Query/useCategoryList";
import { useEquipmentList } from "@hooks/Query/useEquipmentList";
import { BasicSetting, GridAllCenter, GridColumn } from "@styles/common";
import { styled } from "styled-components";

function ExercisePage() {
  const offset: number = 0;

  const { data } = useCategoryList();
  const { data: eqData } = useEquipmentList();
  const { data: baseData } = useBaseInfoList(offset);
  console.log(baseData?.results);
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
          {baseData?.results.map((list) => (
            <S.ItemBox>
              {list?.images[0]?.image ? (
                <S.Img src={list?.images[0]?.image} />
              ) : (
                <S.Img src={"../../public/Img/로고.png"} />
              )}
              <S.Info>
                <S.InfoCate>{list.category.name}</S.InfoCate>
                <S.InfoName>{list?.exercises[0]?.name}</S.InfoName>
                <S.InfoEq>{list?.equipment[0]?.name}</S.InfoEq>
              </S.Info>
            </S.ItemBox>
          ))}
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
  margin: 2.8rem 0 0 5rem;
  ${GridAllCenter}
  ${GridColumn(3)}
`;

const ItemBox = styled.div`
  width: 16rem;
  height: 20rem;
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Img = styled.img`
  width: 10rem;
  height: 12rem;
  object-fit: cover;
`;

const Info = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
`;

const InfoCate = styled.span``;
const InfoName = styled.span``;
const InfoEq = styled.span``;

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
  ItemBox,
  Img,
  Info,
  InfoCate,
  InfoName,
  InfoEq,
  SwitchName,
};
