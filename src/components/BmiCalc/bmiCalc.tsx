interface BMICalcProps {
  bmi: number | null;
  gender: string | null;
}

const BMICalculator: React.FC<BMICalcProps> = ({ bmi, gender }) => {
  const getBMICategory = (calculatedBMI: number): string => {
    if (gender === "male") {
      if (calculatedBMI < 18.5) {
        return "저체중";
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        return "정상";
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        return "과체중";
      } else {
        return "비만";
      }
    } else if (gender === "female") {
      if (calculatedBMI < 17.5) {
        return "저체중";
      } else if (calculatedBMI >= 17.5 && calculatedBMI < 23.9) {
        return "정상";
      } else if (calculatedBMI >= 24 && calculatedBMI < 28.9) {
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
          {/* <p>Category: {getBMICategory}</p> */}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
