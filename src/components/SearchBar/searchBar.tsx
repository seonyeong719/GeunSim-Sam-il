import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSearchList } from "@hooks/Query/useSearchList";
import { useState } from "react";

function SearchBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { data } = useSearchList(String(searchInput));
  console.log(data);

  const inputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search_list/${searchInput}`);
  };

  return (
    <S.Wrapper onSubmit={searchSubmit}>
      <S.SearchInput
        value={searchInput}
        onChange={inputs}
        name="searchInput"
        placeholder="운동을 검색해 보세요!"
      />
      <S.GlassWrap>
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
    width: 50%;
    margin-left: 1rem;
  }
`;

const SearchInput = styled.input`
  height: 2.5rem;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.3rem;
  padding-left: 0.6rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 2.2rem;
  }
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
