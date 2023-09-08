import { useBaseInfoIdList } from "@hooks/Query/useBaseInfo";
import { BasicSetting } from "@styles/common";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

/**
 * 디테일 페이지의 타이틀은 exercisebaseinfo(id) axios의 exercise에 인덱스1번(두번째)으로 불러와야함
 * description 은 exercise 안에 2번째 des 사용
 */
function DetailPage() {
  const { id } = useParams();
  const { data } = useBaseInfoIdList(Number(id));

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>dfdfd</S.Title>
        <S.HashWrap>
          <S.Tag>#카테고리</S.Tag>
        </S.HashWrap>
      </S.TitleWrap>
      <S.Description>
        <S.DesTitle>운동 설명 제목asdf</S.DesTitle>
        <S.DesMent>멘트asdf</S.DesMent>
      </S.Description>
    </S.Wrap>
  );
}
export default DetailPage;

const Wrap = styled.div`
  ${BasicSetting}
  padding-top: 3rem;
`;

const TitleWrap = styled.div`
  background-color: #f8f8f8;
  padding: 2.5rem;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.PALETTE.fontColor[300]};
  margin-bottom: 4rem;
`;

const HashWrap = styled.div``;

const Tag = styled.span`
  padding: 0.6rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  color: white;
`;

const Description = styled.div`
  padding-right: 10rem;
`;

const DesTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const DesMent = styled.div`
  margin-top: 1rem;
`;
const S = {
  Wrap,
  TitleWrap,
  Title,
  HashWrap,
  Tag,
  Description,
  DesTitle,
  DesMent,
};
