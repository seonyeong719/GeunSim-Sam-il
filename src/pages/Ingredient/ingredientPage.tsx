// import Pagination from "@components/Pagination/pagination";
import { useIngredientList } from "@hooks/Query/useIngredient";
import { BasicSetting, FlexAlignCenter } from "@styles/common";
import { styled } from "styled-components";

function IngredientPage() {
  const { data, isLoading } = useIngredientList();
  console.log(data);
  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SearchWrap>
          <S.Title>음식의 재료성분을 검색해보세요!</S.Title>
          <S.SearchBar>써치바</S.SearchBar>
        </S.SearchWrap>
        <S.ListWrap>
          {data?.results.map((list) => (
            <S.List>{list.name}</S.List>
          ))}
        </S.ListWrap>
        {/* <Pagination totalPage={} limits={10} setPage={setPage} /> */}
      </S.Wrapper>
    </S.Wrap>
  );
}
export default IngredientPage;

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
  display: flex;
  padding-top: 4rem;
`;

const SearchWrap = styled.div`
  width: 100%;
  ${FlexAlignCenter}
  flex-direction: column;
  /* padding: 2rem; */
`;

const ListWrap = styled.div`
  width: 100%;
`;

const List = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`;

const SearchBar = styled.div``;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  }
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
