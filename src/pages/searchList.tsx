import { useBaseInfoIdList } from "@hooks/Query/useBaseInfo";
import { useSearchList } from "@hooks/Query/useSearchList";
import { BasicSetting, GridAllCenter, GridColumn } from "@styles/common";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

function SearchList() {
  const { term } = useParams();
  const { data } = useSearchList(String(term));
  const ddd = data?.suggestions.map((a) => a.data.id);
  const { data: baseData } = useBaseInfoIdList(Number(aaa));
  const aaa = ddd === baseData?.images[0].id;
  const { id = aaa } = useParams();

  const navigate = useNavigate();
  console.log(baseData);

  console.log(data);

  return (
    <S.Wrap>
      <S.Search>검색하신 "{term}" 에 대한 정보입니다.</S.Search>
      <S.ListWrap>
        {data?.suggestions.map((list) => (
          <S.ItemBox onClick={() => navigate(`/detail/${list?.data.id}`)}>
            {list.data.image ? (
              <S.Img src={list?.data.image} />
            ) : (
              <S.Img src={"../../public/Img/로고.png"} />
            )}
            <S.ContentWrap>
              <S.Name>{list.data.name}</S.Name>
              <S.Category>{list.data.category}</S.Category>
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
  /* border-bottom: 1px solid gray; */
`;

const ListWrap = styled.div`
  background-color: yellow;
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
`;

const Img = styled.img`
  overflow: hidden;
  width: 6rem;
  height: 6rem;
`;

const ContentWrap = styled.div`
  margin-left: 3rem;
`;

const Name = styled.div`
  margin-bottom: 1rem;
`;

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
