import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LIST } from "consts/navList";
import { FlexAlignCenter } from "@styles/common";

function MobileHeader() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const onSideBarBtn = () => {
    setOpen((prev) => !prev);
  };

  const onClickNav = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <S.Wrapper>
      {open ? <Cross onClick={onSideBarBtn} /> : <S.Hamburger onClick={onSideBarBtn} />}
      {open && (
        <S.Ul>
          {NAV_LIST.map((nav, idx) => (
            <S.Li
              key={idx}
              state={nav.address === location.pathname}
              onClick={() => onClickNav(nav.address)}
            >
              {nav.title}
            </S.Li>
          ))}
        </S.Ul>
      )}
    </S.Wrapper>
  );
}

export default MobileHeader;

const Wrapper = styled.div`
  ${FlexAlignCenter}
  display: none;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: block;
  }
`;

const Cross = styled(RxCross2)`
  color: ${({ theme }) => theme.PALETTE.primary[200]};
  font-size: 2.2rem;
  position: relative;
  cursor: pointer;
  z-index: 9999;
`;

const Hamburger = styled(RxHamburgerMenu)`
  color: ${({ theme }) => theme.PALETTE.primary[200]};
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;
  cursor: pointer;
  z-index: 9999;
`;

const Ul = styled.ul`
  position: absolute;
  background-color: #e9e9e9;
  right: -3rem;
  top: 0;
  font-size: 2rem;
  width: 60vw;
  height: 100vh;
  padding: 8rem 0 0 3rem;
  z-index: 99;
  @keyframes slide {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slide 1s ease;
  animation-duration: 0.4s;
  animation-timing-function: ease;
`;

const Li = styled.li<{ state: boolean | undefined }>`
  color: black;
  list-style: none;
  padding-top: 1.7rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ state }) => (state ? "#B041FF" : "")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.PALETTE.hover};
  }
`;

const S = { Wrapper, Hamburger, Ul, Li };
