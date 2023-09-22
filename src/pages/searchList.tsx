import { BasicSetting, GridAllCenter, GridColumn } from "@styles/common";
import { styled } from "styled-components";

function SearchList() {
  return (
    <S.Wrap>
      <S.Search>검색하신 "" 에 대한 정보입니다.</S.Search>
      <S.ListWrap>
        <S.ItemBox>
          <S.Img src={"../../public/Img/로고.png"} />
          <S.ContentWrap>
            <S.Name>운동 이름</S.Name>
            <S.Category>카테고리</S.Category>
          </S.ContentWrap>
        </S.ItemBox>
      </S.ListWrap>
    </S.Wrap>
  );
}
export default SearchList;

const Wrap = styled.div`
  ${BasicSetting}
`;

const Search = styled.div`
  width: 40rem;
  margin: 2rem 0;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  /* border-bottom: 1px solid gray; */
`;

const ListWrap = styled.div`
  background-color: yellow;
  ${GridAllCenter}
  ${GridColumn(3)}
`;

const ItemBox = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 20rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  overflow: hidden;
  width: 6rem;
  height: 6rem;
`;

const ContentWrap = styled.div`
  margin-left: 3rem;
`;

const Name = styled.div``;

const Category = styled.div``;

const S = {
  Wrap,
  Search,
  ListWrap,
  ItemBox,
  Img,
  ContentWrap,
  Name,
  Category,
};
