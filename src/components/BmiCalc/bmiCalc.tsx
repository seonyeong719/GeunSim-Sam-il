import { styled } from "styled-components";
import { ResponsiveBullet } from "@nivo/bullet";
import { FlexJustifyCenter } from "@styles/common";

interface BMICalcProps {
  bmi: number | null;
  gender: string | null;
}

interface DataPoint {
  id: string;
  ranges: [number, number, number, number];
  measures: [number];
}

const BMICalculator: React.FC<BMICalcProps> = ({ bmi, gender }) => {
  const getBMICategory = (bmi: number): string => {
    if (gender === "male") {
      if (bmi < 18.5) {
        return "저체중";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return "정상";
      } else if (bmi >= 25 && bmi < 29.9) {
        return "과체중";
      } else {
        return "비만";
      }
    } else if (gender === "female") {
      if (bmi < 17.5) {
        return "저체중";
      } else if (bmi >= 17.5 && bmi < 23.9) {
        return "정상";
      } else if (bmi >= 24 && bmi < 28.9) {
        return "과체중";
      } else {
        return "비만";
      }
    } else {
      return "성별을 체크해주세요";
    }
  };

  const data: DataPoint[] = [
    {
      id: "BMI",
      ranges: [18.5, 23, 25, 30],
      measures: [bmi!], // 차트 수치
    },
  ];

  return (
    <div>
      {bmi !== null && gender !== null && (
        <S.Wrap>
          <ResponsiveBullet
            data={data}
            maxValue={40}
            titleOffsetX={-10}
            titleAlign="end"
            titleRotation={-45}
            margin={{ top: 20, right: 10, bottom: 30, left: 30 }}
          />
          <S.BmiNum>
            나의 BMI 지수 = {bmi} ({getBMICategory(bmi)})
          </S.BmiNum>
        </S.Wrap>
      )}
    </div>
  );
};

export default BMICalculator;
const Wrap = styled.div`
  height: 4rem;
`;

const BmiNum = styled.div`
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  ${FlexJustifyCenter}
  margin: 2rem;
`;

const S = {
  Wrap,
  BmiNum,
};
