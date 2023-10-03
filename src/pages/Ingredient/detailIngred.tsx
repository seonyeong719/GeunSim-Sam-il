import Spinner from "@components/Loading/spinner";
import { useIngredientId, useIngredientImg } from "@hooks/Query/useIngredient";
import { BasicSetting, FlexAllCenter } from "@styles/common";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function IngredientDetail() {
  const { id } = useParams();
  const { data, isLoading } = useIngredientId(Number(id));
  const { data: imgData } = useIngredientImg(Number(id));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.Title>{data?.name}</S.Title>
        <S.Gram>모든 성분은 100g 기준입니다</S.Gram>
        <S.ListWrap>
          <S.ListTitle>영양성분</S.ListTitle>
          <S.List>
            <S.Ingredient>칼로리</S.Ingredient>
            <S.Calory>{data?.energy.toFixed(1)}kcal</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>단백질</S.Ingredient>
            <S.Calory>{`${Number(data?.protein).toFixed(1)}g`}</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>탄수화물</S.Ingredient>
            <S.Calory>{`${Number(data?.carbohydrates).toFixed(1)}g`}</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>탄수화물 중 당 함량</S.Ingredient>
            <S.Calory>{`${Number(data?.carbohydrates_sugar).toFixed(1)}g`}</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>지방</S.Ingredient>
            <S.Calory>{`${Number(data?.fat).toFixed(1)}g`}</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>지방 중 포화지방 함량</S.Ingredient>
            <S.Calory>{`${Number(data?.fat_saturated).toFixed(1)}g`}</S.Calory>
          </S.List>
          <S.List>
            <S.Ingredient>나트륨</S.Ingredient>
            <S.Calory>{`${Number(data?.sodium).toFixed(1)}g`}</S.Calory>
          </S.List>
        </S.ListWrap>
      </S.Wrapper>
      <S.ImgWrap>
        <S.Image src={imgData?.results[0]?.image} />
      </S.ImgWrap>
    </S.Wrap>
  );
}
export default IngredientDetail;

const Wrap = styled.div`
  ${BasicSetting}
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding-right: 4rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding-right: 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.ml};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  padding-bottom: 1rem;
  border-bottom: 2px solid gray;
`;

const Gram = styled.div`
  text-align: end;
  margin-top: 1rem;
  color: ${({ theme }) => theme.PALETTE.fontColor[200]};
`;

const List = styled.div`
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
  color: ${({ theme }) => theme.PALETTE.fontColor[200]};
  border-bottom: 1px solid gray;
`;

const ListWrap = styled.div`
  margin-top: 5rem;
`;

const ListTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  padding-bottom: 1rem;
  border-bottom: 2px solid gray;
`;

const Ingredient = styled.div``;

const Calory = styled.div``;

const ImgWrap = styled.div`
  width: 50%;
  ${FlexAllCenter}
  margin-top: 4rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: 32rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 15rem;
    height: 20rem;
  }
`;

const S = {
  Wrap,
  Wrapper,
  Title,
  Gram,
  ListWrap,
  ListTitle,
  List,
  Ingredient,
  Calory,
  ImgWrap,
  Image,
};
