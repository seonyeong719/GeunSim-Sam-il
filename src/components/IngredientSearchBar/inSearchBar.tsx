import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";

function InSearchBar() {
  return (
    <S.Wrapper>
      <S.SearchInput name="inSearchInput" placeholder="재료를 검색해 보세요!" />
      <S.GlassWrap>
        <FiSearch />
      </S.GlassWrap>
    </S.Wrapper>
  );
}
export default InSearchBar;

const Wrapper = styled.form`
  width: 70%;
  position: relative;
  margin: 3rem 0;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 50%;
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
