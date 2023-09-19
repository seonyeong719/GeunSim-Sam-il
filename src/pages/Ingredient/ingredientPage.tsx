// import Pagination from "@components/Pagination/pagination";
import Spinner from "@components/Loading/spinner";
import { useIngredientList } from "@hooks/Query/useIngredient";
import { BasicSetting, FlexAlignCenter } from "@styles/common";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function IngredientPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useIngredientList();
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SearchWrap>
          <S.Title>음식의 재료성분을 검색해보세요!</S.Title>
          <S.SearchBar>써치바</S.SearchBar>
        </S.SearchWrap>
        <S.ListWrap>
          <S.ListTitle>재료</S.ListTitle>
          {data?.results.map((list) => (
            <S.List onClick={() => navigate(`/ingredient_detail/${list.id}`)}>{list.name}</S.List>
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

const ListTitle = styled.div`
  margin: 0 0 1rem 1rem;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  border-bottom: 2px solid #d9d9d9;
`;

const List = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.PALETTE.hover};
    border: 2px solid ${({ theme }) => theme.PALETTE.hover};
  }
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
  ListTitle,
  List,
  Title,
  SearchBar,
};
