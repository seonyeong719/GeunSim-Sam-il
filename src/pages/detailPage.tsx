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
  console.log(data);

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>{data?.exercises[0]?.name}</S.Title>
        <S.HashWrap>
          <S.CategoryTag>#{data?.category.name}</S.CategoryTag>
          {data?.equipment.map((el) => (
            <S.EquipmentTag>#{el.name}</S.EquipmentTag>
          ))}
        </S.HashWrap>
      </S.TitleWrap>
      <S.DescriptionWrap>
        <S.Description>
          <S.DesTitle>운동 설명</S.DesTitle>
          <S.DesMent>{data?.exercises[0]?.description.replace(/<\/?[^>]+(>|$)/g, "")}</S.DesMent>
        </S.Description>
        {data?.images[0] ? (
          <S.DesImg src={data?.images[0].image} />
        ) : (
          <S.DesImg src={"../../public/Img/로고.png"} />
        )}
      </S.DescriptionWrap>
      <S.MusclesWrap>
        <S.MusTitle>운동 부위</S.MusTitle>
        <S.PrimaryWrap>
          <S.Primary>
            <S.MuscleImg src={data?.muscles[0].image_url_main} />
            <S.MuscleName></S.MuscleName>
          </S.Primary>
          <S.Primary>
            <S.MuscleImg />
            <S.MuscleName></S.MuscleName>
          </S.Primary>
        </S.PrimaryWrap>
      </S.MusclesWrap>
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

const CategoryTag = styled.span`
  padding: 0.6rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  color: white;
  margin-right: 1rem;
`;

const EquipmentTag = styled.span`
  padding: 0.6rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  color: white;
`;

const DescriptionWrap = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;

const Description = styled.div`
  margin-right: 3.5rem;
`;

const DesImg = styled.img`
  width: 20rem;
  height: 15rem;
  box-shadow: 0 5px 20px #d9d9d9;
`;

const DesTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const DesMent = styled.div`
  margin-top: 1rem;
`;

const MusclesWrap = styled.div``;

const MusTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const PrimaryWrap = styled.div`
  display: flex;
`;

const Primary = styled.div`
  background-color: red;
`;

const MuscleImg = styled.img`
  width: 15rem;
  height: 25rem;
`;

const MuscleName = styled.div``;
const S = {
  Wrap,
  TitleWrap,
  Title,
  HashWrap,
  CategoryTag,
  EquipmentTag,
  DescriptionWrap,
  Description,
  DesImg,
  DesTitle,
  DesMent,
  MusclesWrap,
  MusTitle,
  PrimaryWrap,
  Primary,
  MuscleImg,
  MuscleName,
};
