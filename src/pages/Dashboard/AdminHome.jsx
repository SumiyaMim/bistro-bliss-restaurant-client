import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers, FaTruck } from 'react-icons/fa';
import { IoWallet } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const AdminHome = () => {

  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
        const res = await axiosSecure.get('/admin-stats');
        return res.data;
    }
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
        const res = await axiosSecure.get('/order-stats');
        return res.data;
    }
  })

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
      
  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
       const x = cx + radius * Math.cos(-midAngle * RADIAN);
       const y = cy + radius * Math.sin(-midAngle * RADIAN);

       return (
           <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
               {`${(percent * 100).toFixed(0)}%`}
           </text>
       );
  };

  const pieChartData = chartData.map(data => {
       return {name: data.category, value: data.revenue}
  })

  return (
    <div>
      <h2 className="text-2xl uppercase font-display font-bold mb-6">Hi, Welcome Back!</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white flex items-center gap-4 p-6 rounded-md">
            <div>
              <IoWallet className="text-4xl"></IoWallet>
            </div>
            <div>
              <div className="text-2xl font-bold">${stats.revenue}</div>
              <div>Revenue</div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white flex items-center gap-4 p-6 rounded-md">
            <div>
              <FaUsers className="text-4xl"></FaUsers>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.users}</div>
              <div>Customers</div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white flex items-center gap-4 p-6 rounded-md">
            <div>
              <LuChefHat className="text-4xl"></LuChefHat>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.menuItems}</div>
              <div>Menu</div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white flex items-center gap-4 p-6 rounded-md">
            <div>
              <FaTruck className="text-4xl"></FaTruck>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.orders}</div>
              <div>Orders</div>
            </div>
        </div>
      </div>

      <div className="bg-white mt-8 py-5 lg:flex lg:items-center lg:gap-3">
        <div className="flex justify-center lg:pl-10 lg:pr-5 px-6 md:px-0">
            <BarChart
                width={350}
                height={300}
                data={chartData}
                margin={{
                    top: 20,
                    left: -40,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
        <div className="flex justify-center">
          <PieChart width={370} height={300}>
              <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
              >
                  {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
              </Pie>
              <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
