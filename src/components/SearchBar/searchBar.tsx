import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <S.Wrapper>
      <S.SearchInput placeholder="운동을 검색해 보세요!" />
      <S.SearchGlass />
    </S.Wrapper>
  );
}
export default SearchBar;

const Wrapper = styled.div`
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

const SearchGlass = styled(FiSearch)`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  position: absolute;
  right: 2%;
  top: 15%;
  color: ${({ theme }) => theme.PALETTE.gray[300]};
  cursor: pointer;
`;

const S = {
  Wrapper,
  SearchInput,
  SearchGlass,
};
