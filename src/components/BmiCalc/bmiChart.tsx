import { ResponsiveBullet } from "@nivo/bullet";

interface DataPoint {
  id: string;
  ranges: [number, number, number];
  measures: [number];
}

const MyBulletChart: React.FC = () => {
  const data: DataPoint[] = [
    {
      id: "BMI",
      ranges: [220, 260, 300],
      measures: [200], // 차트 수치
    },
  ];

  return (
    <div style={{ height: "270px" }}>
      <ResponsiveBullet
        data={data}
        spacing={100}
        margin={{ top: 50, right: 10, bottom: 200, left: 10 }}
      />
    </div>
  );
};

export default MyBulletChart;
