
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ ratings }) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Bar dataKey="count" fill="#F81" barSize={25} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
