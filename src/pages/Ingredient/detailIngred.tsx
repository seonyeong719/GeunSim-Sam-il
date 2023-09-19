import Spinner from "@components/Loading/spinner";
import { useIngredientId } from "@hooks/Query/useIngredient";
import { BasicSetting } from "@styles/common";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function IngredientDetail() {
  const { id } = useParams();
  const { data, isLoading } = useIngredientId(Number(id));
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.Title>title</S.Title>
        <S.List>모든 성분은 100g 기준입니다</S.List>
      </S.Wrapper>
      <S.ImgWrap>
        <S.Image src="" />
      </S.ImgWrap>
    </S.Wrap>
  );
}
export default IngredientDetail;

const Wrap = styled.div`
  ${BasicSetting}
  padding-top: 3rem;
  display: flex;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding-right: 4rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.ml};
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
`;

const List = styled.div``;

const ImgWrap = styled.div`
  width: 50%;
  background-color: yellow;
`;

const Image = styled.img``;

const S = {
  Wrap,
  Wrapper,
  Title,
  List,
  ImgWrap,
  Image,
};
