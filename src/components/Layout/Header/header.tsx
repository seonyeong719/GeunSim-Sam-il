import { FlexAlignCenter, FlexAllCenter } from "@styles/common";
import { NAV_LIST } from "consts/navList";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Header() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Wrap>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <S.Logo>근심삼일</S.Logo>
        </Link>
        <S.Div>
          {NAV_LIST.map((el, idx) => (
            <S.NavWrap>
              <S.Nav
                key={idx}
                state={el.address === location.pathname}
                onClick={() => navigate(`${el.address}`)}
              >
                {el.title}
              </S.Nav>
            </S.NavWrap>
          ))}
        </S.Div>
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
  justify-content: space-between;
  width: 65%;
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.LOGO_FONT.logo};
  color: ${({ theme }) => theme.PALETTE.primary[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
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
  Div,
  NavWrap,
  Nav,
};
