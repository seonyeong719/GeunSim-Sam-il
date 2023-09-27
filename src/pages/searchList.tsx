import Spinner from "@components/Loading/spinner";
import { useSearchList } from "@hooks/Query/useSearchList";
import { BasicSetting, GridAllCenter, GridColumn } from "@styles/common";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

function SearchList() {
  const navigate = useNavigate();
  const { term } = useParams();
  const { data, isLoading } = useSearchList(String(term));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      {data?.suggestions.length ? (
        <S.Search>검색하신 "{term}" 에 대한 정보입니다.</S.Search>
      ) : (
        <S.Search>검색하신 "{term}"에 대한 정보가 없습니다.</S.Search>
      )}
      <S.ListWrap>
        {data?.suggestions.map((list) => (
          <S.ItemBox onClick={() => navigate(`/detail/${list?.data.base_id}`)}>
            {list.data.image ? (
              <S.Img src={`https://wger.de/${list?.data.image}`} />
            ) : (
              <S.Img src={"../../public/Img/로고.png"} />
            )}
            <S.ContentWrap>
              <S.Name>{list.data.name}</S.Name>
              <S.Category>#{list.data.category}</S.Category>
            </S.ContentWrap>
          </S.ItemBox>
        ))}
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
`;

const ListWrap = styled.div`
  ${GridAllCenter}
  ${GridColumn(3)}
  cursor: pointer;
`;

const ItemBox = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 20rem;
  display: flex;
  align-items: center;
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
  width: 6rem;
  height: 6rem;
  padding: 0.5rem;
  border-right: 1px dotted gray;
`;

const ContentWrap = styled.div`
  margin-left: 1rem;
`;

const Name = styled.div`
  margin-bottom: 1rem;
`;

const Category = styled.span`
  background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  color: white;
  padding: 0.3rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`;

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
