import { PieChart, Pie, Tooltip, } from 'recharts';

const Statistics = () => {

    const dynamicValue = JSON.parse(localStorage.getItem('donations'))
    let donationLength = dynamicValue.length;
    
    const groupChart = [
        { "name": "Your Donation", "value": donationLength },
        { "name": "Total Donation", "value": 12 },
      ];
    return (
        <div >
        <PieChart width={1350} height={400}>
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