import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { defaultScroll } from "@utils/scrollToTop";
import { FlexAllCenter } from "@styles/common";
import { PaginationProp } from "@type/paginationType";

function Pagination({ totalPage, limits, setPage }: PaginationProp) {
  const [params, setParams] = useSearchParams();

  const pageParam = params.get("page");
  const nowPage: number = parseInt(pageParam !== null ? pageParam : "") || 1;

  const startPage = Math.floor((nowPage - 1) / limits) * limits + 1;

  let endPage = startPage + limits - 1;
  if (endPage >= totalPage) endPage = totalPage;

  const nextPage = (number: number) => {
    setPage(number);
    const queryString: { [key: string]: string } = {};
    if (params.toString()) {
      params
        .toString()
        .split("&")
        .forEach((query) => {
          const [key, value] = query.split("=");
          queryString[key] = value;
        });
    }
    queryString["page"] = number.toString();
    setParams(queryString);
  };

  const createPageArray = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(undefined)
      .map((_, i) => start + i);
  };

  const disable = (type: string) => {
    if (type === "start") {
      return Math.floor((nowPage - 1) / limits) === 0;
    }
    if (type === "end") {
      return Math.ceil(nowPage / limits) === Math.ceil(totalPage / limits);
    }
  };

  if (!endPage) return;

  return (
    <S.NavBtn>
      <S.ArrowBtn
        onClick={() => {
          nextPage(Math.floor((nowPage - 1) / limits) * limits);
          defaultScroll();
        }}
        disabled={disable("start")}
        aria-label="LeftArrow"
      >
        <HiArrowCircleLeft />
      </S.ArrowBtn>
      {createPageArray(startPage, endPage).map((_, i) => (
        <S.NumBtn
          aria-label="NumberBtn"
          key={i}
          onClick={() => {
            nextPage(i + startPage);
            defaultScroll();
          }}
          aria-current={nowPage === i + startPage ? "page" : undefined}
        >
          {i + startPage}
        </S.NumBtn>
      ))}
      <S.ArrowBtn
        onClick={() => {
          nextPage(Math.ceil(nowPage / limits) * limits + 1);
          defaultScroll();
        }}
        disabled={disable("end")}
        aria-label="RightArrow"
      >
        <HiArrowCircleRight />
      </S.ArrowBtn>
    </S.NavBtn>
  );
}
export default Pagination;

const NavBtn = styled.nav`
  ${FlexAllCenter}
  padding: 5rem 0;
`;

const ArrowBtn = styled.button`
  padding: 0.5rem;
  padding-top: 0.8rem;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.PALETTE.primary[300]};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.PALETTE.hover};
  }

  &[disabled] {
    cursor: revert;
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }
`;

const NumBtn = styled.button`
  border: none;
  margin: 0 0.6rem;
  font-size: 1.2rem;
  color: black;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.PALETTE.primary[300]};
    border-bottom: 1px solid ${({ theme }) => theme.PALETTE.primary[300]};
  }

  &[aria-current] {
    color: ${({ theme }) => theme.PALETTE.primary[100]};
    font-family: ${({ theme }) => theme.FONT_WEIGHT.heavy};
  }
`;

const S = {
  NavBtn,
  ArrowBtn,
  NumBtn,
};
