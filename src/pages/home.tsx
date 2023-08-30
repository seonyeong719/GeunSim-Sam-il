import { BasicSetting, FlexAlignCenter, FlexAllCenter, FlexJustifyCenter } from "@styles/common";
import { useEffect } from "react";
import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.Img1Wrap>
          <S.Img1 data-aos="fade-right" src="../../public/Img/운동고민.png" />
          <div>이미지1 소개글</div>
        </S.Img1Wrap>
        <S.Img2Wrap>
          <div>이미지1 소개글</div>
          <S.Img2 data-aos="fade-left" src="../../public/Img/스트레스 관리.png" />
        </S.Img2Wrap>
        <S.Img3Wrap>
          <S.Img3 data-aos="fade-up" data-aos-duration="3000" src="../../public/Img/로고.png" />
          <div data-aos="fade-up" data-aos-duration="3000">
            프로젝트 소개 글
          </div>
        </S.Img3Wrap>
      </S.Wrapper>
    </S.Wrap>
  );
}
export default HomePage;

const Wrap = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  ${BasicSetting}
  height: 30rem;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const Img1Wrap = styled.div`
  padding: 8rem 0;
  ${FlexAlignCenter}
`;

const Img1 = styled.img`
  width: 40rem;
  height: 30rem;
`;

const Img2Wrap = styled.div`
  justify-content: end;
  ${FlexAlignCenter}
  padding: 12rem 0;
`;

const Img2 = styled.img`
  width: 40rem;
  height: 30rem;
`;

const Img3Wrap = styled.div`
  padding: 12rem 0;
  width: 100%;
  flex-direction: column;
  ${FlexAllCenter}
`;

const Img3 = styled.img`
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  ${FlexJustifyCenter}
`;

const S = {
  Wrap,
  Wrapper,
  Img1Wrap,
  Img1,
  Img2Wrap,
  Img2,
  Img3Wrap,
  Img3,
};
