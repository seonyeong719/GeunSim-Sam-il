import { BasicSetting, FlexAllCenter } from "@styles/common";
import { styled } from "styled-components";

function IngredientPage() {
  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SearchWrap>
          <S.Title>음식의 재료성분을 검색해보세요!</S.Title>
          <S.SearchBar>써치바</S.SearchBar>
        </S.SearchWrap>
        <S.ListWrap>
          <S.List>리스트</S.List>
        </S.ListWrap>
      </S.Wrapper>
    </S.Wrap>
  );
}
export default IngredientPage;
const Wrap = styled.div`
  ${BasicSetting}
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 4rem;
`;

const SearchWrap = styled.div`
  background-color: yellow;
  width: 100%;
  ${FlexAllCenter}
  flex-direction: column;
  /* padding: 2rem; */
`;

const ListWrap = styled.div`
  background-color: green;
  width: 100%;
`;

const List = styled.div``;

const SearchBar = styled.div``;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;
const S = {
  Wrap,
  Wrapper,
  SearchWrap,
  ListWrap,
  List,
  Title,
  SearchBar,
};
