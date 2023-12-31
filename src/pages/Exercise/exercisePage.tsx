import Spinner from "@components/Loading/spinner";
import Pagination from "@components/Pagination/pagination";
import SwitchButton from "@components/SwitchButton/switchButton";
import { useBaseInfoList } from "@hooks/Query/useBaseInfo";
import { useCategoryList } from "@hooks/Query/useCategoryList";
import { useEquipmentList } from "@hooks/Query/useEquipmentList";
import { BasicSetting, GridAllCenter, GridColumn } from "@styles/common";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function ExercisePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [categoryFilters, setCategoryFilters] = useState<{ [key: string]: boolean }>({});
  const [equipmentFilters, setEquipmentFilters] = useState<{ [key: string]: boolean }>({});

  const { data } = useCategoryList();
  const { data: eqData } = useEquipmentList();

  const offset: number | undefined = page * 18;
  const { data: baseData, isLoading } = useBaseInfoList(offset);

  const handleCategoryToggle = (categoryName: string, isChecked: boolean) => {
    setCategoryFilters({ ...categoryFilters, [categoryName]: isChecked });
  };

  const handleEquipmentToggle = (equipmentName: string, isChecked: boolean) => {
    setEquipmentFilters({ ...equipmentFilters, [equipmentName]: isChecked });
  };

  const filteredData = baseData?.results.filter((list) => {
    const categoryFilter = categoryFilters[list.category.name] || false;
    const equipmentFilter = equipmentFilters[list?.equipment[0]?.name] || false;
    return categoryFilter && equipmentFilter;
  });

  const total: number | undefined = baseData?.count || filteredData?.length;
  const totalPage: number | undefined = total && total / 18;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SwitchWrap>
          <S.CategoryWrap>
            <S.Names>카테고리</S.Names>
            <S.SwitchList>
              {data?.results.map((el: { name: string }) => (
                <S.Div key={el.name}>
                  <S.SwitchName>{el.name}</S.SwitchName>
                  <SwitchButton
                    label={el.name}
                    onToggle={(isChecked) => handleCategoryToggle(el.name, isChecked)}
                  />
                </S.Div>
              ))}
            </S.SwitchList>
          </S.CategoryWrap>
          <S.EquipmentWrap>
            <S.Names>운동 장비</S.Names>
            <S.SwitchList>
              {eqData?.results.map((e: { name: string }) => (
                <S.Div key={e.name}>
                  <S.SwitchName>{e.name}</S.SwitchName>
                  <SwitchButton
                    label={e.name}
                    onToggle={(isChecked) => handleEquipmentToggle(e.name, isChecked)}
                  />
                </S.Div>
              ))}
            </S.SwitchList>
          </S.EquipmentWrap>
        </S.SwitchWrap>
        {!isLoading && (
          <>
            {filteredData?.length === 0 ? (
              <S.ListWrap>
                {baseData?.results.map((list, idx) => (
                  <S.ItemBox key={idx} onClick={() => navigate(`/detail/${list.id}`)}>
                    {list?.images[0]?.image ? (
                      <S.Img src={list?.images[0]?.image} />
                    ) : (
                      <S.Img src={"/public/Img/로고.png"} />
                    )}
                    <S.Info>
                      <S.InfoCate>{list.category.name}</S.InfoCate>
                      <S.InfoName>{list?.exercises[0]?.name}</S.InfoName>
                      <S.InfoEq>{list?.equipment[0]?.name}</S.InfoEq>
                    </S.Info>
                  </S.ItemBox>
                ))}
              </S.ListWrap>
            ) : (
              <S.ListWrap>
                {filteredData?.map((list, idx) => (
                  <S.ItemBox key={idx} onClick={() => navigate(`/detail/${list.id}`)}>
                    {list?.images[0]?.image ? (
                      <S.Img src={list?.images[0]?.image} />
                    ) : (
                      <S.Img src={"/public/Img/로고.png"} />
                    )}
                    <S.Info>
                      <S.InfoCate>{list.category.name}</S.InfoCate>
                      <S.InfoName>{list?.exercises[0]?.name}</S.InfoName>
                      <S.InfoEq>{list?.equipment[0]?.name}</S.InfoEq>
                    </S.Info>
                  </S.ItemBox>
                ))}
              </S.ListWrap>
            )}
          </>
        )}
      </S.Wrapper>
      {totalPage !== undefined && (
        <Pagination totalPage={Math.ceil(totalPage)} limits={10} setPage={setPage} />
      )}
    </S.Wrap>
  );
}
export default ExercisePage;

const Wrap = styled.div`
  ${BasicSetting}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    flex-direction: column;
  }
`;

const SwitchWrap = styled.div`
  min-width: 16rem;
`;

const CategoryWrap = styled.div``;
const EquipmentWrap = styled.div``;
const Names = styled.span`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 1.3rem;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 2rem;
  }
`;

const SwitchList = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 100%;
  margin: 1rem 0 2rem 0;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: flex;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ListWrap = styled.div`
  margin: 2.8rem 0 0 5rem;
  ${GridAllCenter}
  ${GridColumn(3)}
  width: 100%;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${GridColumn(2)}
    margin: 0;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  height: 20rem;
  box-shadow: 2px 5px 5px 2px #d9d9d9;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    transition: transform 0.9s;
  }
  transform: scale(1);
  transition: transform 0.9s;
`;

const Img = styled.img`
  min-width: 100%;
  max-height: 13rem;
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
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 0.8rem;
    margin: 0.5rem -0.2rem;
  }
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
