import { PieChart, Pie, Tooltip, } from 'recharts';

const Statistics = () => {
    return (
        <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={groupChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label = "group"
          />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Statistics;