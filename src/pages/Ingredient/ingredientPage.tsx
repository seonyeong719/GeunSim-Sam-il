import Pagination from "@components/Pagination/pagination";
import InSearchBar from "@components/IngredientSearchBar/inSearchBar";
import Spinner from "@components/Loading/spinner";
import { useIngredientList } from "@hooks/Query/useIngredient";
import { BasicSetting, FlexAlignCenter } from "@styles/common";
import { SearchListType } from "@type/searchListType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function IngredientPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [searchData, setSearchData] = useState<SearchListType>();

  const offset: number | undefined = page;
  const { data, isLoading } = useIngredientList(offset);

  const total: number = data?.count;
  const totalPage: number | undefined = total && total / 20;

  const handleDataFromChild = (data: SearchListType | undefined) => {
    setSearchData(data);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.SearchWrap>
          <S.Title>음식의 재료성분을 검색해보세요!</S.Title>
          <InSearchBar onSearch={handleDataFromChild} />
        </S.SearchWrap>
        <S.ListWrap>
          <S.ListTitle>재료</S.ListTitle>
          {searchData?.suggestions
            ? searchData.suggestions.map((el) => (
                <S.List onClick={() => navigate(`/ingredient_detail/${el.data.id}`)}>
                  {el.value}
                </S.List>
              ))
            : data?.results.map((list) => (
                <S.List onClick={() => navigate(`/ingredient_detail/${list.id}`)}>
                  {list.name}
                </S.List>
              ))}
        </S.ListWrap>
      </S.Wrapper>
      <Pagination totalPage={Math.ceil(totalPage)} limits={10} setPage={setPage} />
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
  @media ${({ theme }) => theme.DEVICE.mobile} {
    flex-direction: column;
    padding-top: 2rem;
  }
`;

const SearchWrap = styled.div`
  width: 100%;
  ${FlexAlignCenter}
  flex-direction: column;
`;

const ListWrap = styled.div`
  width: 100%;
`;

const ListTitle = styled.div`
  margin: 0 0 1rem 1rem;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  border-bottom: 2px solid #d9d9d9;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  }
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
};
