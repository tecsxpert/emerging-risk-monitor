import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

function Analytics() {
 const stored = JSON.parse(localStorage.getItem("risks")) || [];

const barData = [
  { name: "High", value: stored.filter(r => r.riskLevel === "High").length },
  { name: "Medium", value: stored.filter(r => r.riskLevel === "Medium").length },
  { name: "Low", value: stored.filter(r => r.riskLevel === "Low").length }
];


  const lineData = [
    { month: "Jan", value: 2 },
    { month: "Feb", value: 3 },
    { month: "Mar", value: 5 },
    { month: "Apr", value: 4 },
    { month: "May", value: 6 },
    { month: "Jun", value: 7 }
  ];

  const pieData = barData; // reuse same data

  // 🎨 Colors
  const COLORS = ["#ff4d4f", "#faad14", "#52c41a"];

  return (
  <div
    style={{
      padding: "30px",
      background: "#f5f7fa",
      minHeight: "100vh"
    }}
  >
    <h2
      style={{
        color: "#1B4F8A",
        marginBottom: "30px",
        textAlign: "center"
      }}
    >
      Analytics Dashboard
    </h2>

    {/* TOP ROW */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {/* BAR CHART */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Risk Levels</h3>

        <BarChart width={400} height={300} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#1B4F8A" />
        </BarChart>
      </div>

      {/* LINE CHART */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Monthly Trends</h3>

        <LineChart width={400} height={300} data={lineData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#1B4F8A" />
        </LineChart>
      </div>
    </div>

    {/* PIE CHART BELOW */}
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Risk Distribution</h3>

        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  </div>
);
}

export default Analytics;