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
          <S.Content>
            운동하기로 마음 먹었는데... <br />
            운동 하는 방법은 몰라.. <br />
            근데 PT는 비싸.. <br /> 근데 운동은 잘 하고 싶어.. <br /> 나도 몸 만들고 짱짱맨, 짱짱걸
            되고 싶어..
            <br /> 어떻게 하지?
          </S.Content>
        </S.Img1Wrap>
        <S.Img2Wrap>
          <S.Content></S.Content>
          <S.Img2 data-aos="fade-left" src="../../public/Img/스트레스 관리.png" />
        </S.Img2Wrap>
        <S.Img3Wrap>
          <S.Img3 data-aos="fade-up" data-aos-duration="3000" src="../../public/Img/로고.png" />
          <S.WebInfo data-aos="fade-up" data-aos-duration="3000">
            당신의 운동 여정이 '작심삼일'로 끝나지 않도록 도와줄 <br />
            최고의 헬스 운동 방법과 팁을 찾고 계신가요? <br />
            '근심삼일'은 운동을 시작하고 지속하는데 다양한 정보를 제공합니다!
            <br />
            <br />
            작심삼일을 이기고 건강한 미래를 향해 나아가는 첫걸음을 함께 하실 준비가 되셨나요? 지금
            시작하세요!
          </S.WebInfo>
        </S.Img3Wrap>
      </S.Wrapper>
    </S.Wrap>
  );
}
export default HomePage;

const Wrap = styled.div`
  ${BasicSetting}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const Img1Wrap = styled.div`
  padding: 8rem 0;
  ${FlexAlignCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding: 0;
    flex-direction: column;
  }
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  margin: 0 4rem;
  line-height: 2.7rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 1.2rem;
    line-height: 2.3rem;
    margin: 0 2rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
    line-height: 2rem;
  }
`;

const Img1 = styled.img`
  width: 40rem;
  height: 30rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: auto;
    height: 20rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: auto;
    height: 15rem;
  }
`;

const Img2Wrap = styled.div`
  justify-content: end;
  ${FlexAlignCenter}
  padding: 12rem 0;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    flex-direction: column;
  }
`;

const Img2 = styled.img`
  width: 40rem;
  height: 30rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: auto;
    height: 20rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: auto;
    height: 15rem;
  }
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
  ${FlexJustifyCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 15rem;
    height: 15rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 12rem;
    height: 12rem;
  }
`;

const WebInfo = styled.div`
  width: 40rem;
  margin-top: 3rem;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  line-height: 2.3rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
    line-height: 2rem;
    width: auto;
  }
`;

const S = {
  Wrap,
  Wrapper,
  Img1Wrap,
  Content,
  Img1,
  Img2Wrap,
  Img2,
  Img3Wrap,
  Img3,
  WebInfo,
};
