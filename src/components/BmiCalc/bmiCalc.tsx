interface BMICalcProps {
  bmi: number | null;
  gender: string | null;
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

  return (
    <div>
      {bmi !== null && gender !== null && (
        <div>
          <h3>결과</h3>
          <p>BMI: {bmi}</p>
          <p>비만도: {getBMICategory(bmi)}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
