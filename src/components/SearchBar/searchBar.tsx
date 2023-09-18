import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchList } from "@hooks/Query/useSearchList";

function SearchBar() {
  const navigate = useNavigate();
  const { term } = useParams();

  const inputs = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  const { data } = useSearchList(String(term));
  console.log(data);

  // console.log(data);

  return (
    <S.Wrapper onSubmit={inputs}>
      <S.SearchInput name="searchInput" placeholder="운동을 검색해 보세요!" />
      <S.GlassWrap onClick={() => navigate(`/search_list/${id}`)}>
        <FiSearch />
      </S.GlassWrap>
    </S.Wrapper>
  );
}
export default SearchBar;

const Wrapper = styled.form`
  width: 20rem;
  position: relative;
  margin-top: 0.4rem;
  margin-left: 8rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-top: 1rem;
    width: 20rem;
    margin-left: 5rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const SearchInput = styled.input`
  height: 2.5rem;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.3rem;
  padding-left: 0.6rem;
`;

const GlassWrap = styled.button`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  background-color: transparent;
  position: absolute;
  right: 2%;
  top: 15%;
  border: none;
  color: ${({ theme }) => theme.PALETTE.gray[300]};
  cursor: pointer;
`;

const S = {
  Wrapper,
  SearchInput,
  GlassWrap,
};
