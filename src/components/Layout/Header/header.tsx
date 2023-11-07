import SearchBar from "@components/SearchBar/searchBar";
import { BasicSetting, FlexAlignCenter, FlexAllCenter } from "@styles/common";
import { NAV_LIST } from "consts/navList";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import MobileHeader from "./mobileHeader";

function Header() {
  const navigate = useNavigate();

  type NavType = {
    title: string;
    address: string;
  };

  return (
    <S.Wrapper>
      <S.Wrap>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <S.Logo>근심삼일</S.Logo>
        </Link>
        <S.Search />
        <S.Div>
          {NAV_LIST.map((el: NavType) => (
            <S.NavWrap key={el.title}>
              <S.Nav
                state={el.address === location.pathname}
                onClick={() => navigate(`${el.address}`)}
              >
                {el.title}
              </S.Nav>
            </S.NavWrap>
          ))}
        </S.Div>
        <MobileHeader />
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 5.5rem;
  ${FlexAllCenter}
`;

const Wrap = styled.div`
  display: flex;
  ${BasicSetting}
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.LOGO_FONT.logo};
  color: ${({ theme }) => theme.PALETTE.primary[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  cursor: pointer;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  }
`;

const Search = styled(SearchBar)`
  height: 20rem;
`;

const Div = styled.div`
  display: flex;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
  }
`;

const NavWrap = styled.div`
  ${FlexAlignCenter}
`;

const Nav = styled.span<{ state: boolean }>`
  margin-left: 4rem;
  cursor: pointer;
  color: ${({ state }) => (state ? "#893BFF" : "")};
  &:hover {
    color: ${({ theme }) => theme.PALETTE.hover};
  }
`;

const S = {
  Wrapper,
  Wrap,
  Logo,
  Search,
  Div,
  NavWrap,
  Nav,
};
