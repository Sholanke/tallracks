import { Chart, registerables, defaults } from "chart.js";
import { Line } from "react-chartjs-2";
import Icon from "../ui/icon";
import Dropdown from "../ui/dropdown";

Chart.register(...registerables);

defaults.font = {
  family: "Inter, sans-serif",
  size: 10,
  weight: 500,
};

export default function Activities() {
  return (
    <div className="dashboard-activities gradient-border">
      <h3 className="dashboard-activities__title">
        Activity
        <Icon name="circle-info" />
      </h3>

      <div className="dashboard-activities__cards">
        <div className="gradient-border">
          <span>Plays</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Likes</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Comments</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Shares</span>
          <p>10</p>
        </div>

        <div className="gradient-border">
          <span>Saves</span>
          <p>10</p>
        </div>
      </div>

      <div className="dashboard-chart__header">
        <h3 className="dashboard-chart__title">Overview</h3> 
        <Dropdown iconName="graph" value="Line Graph" />
      </div>

      <div style={{ height: "300px" }}>
        <Line
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            elements: {
              point: { radius: 0 },
              line: { borderJoinStyle: "round" },
            },
            scales: {
              y: {
                beginAtZero: true,
                border: { display: false },
                grid: { color: "#FFFFFF1A", lineWidth: 1 },
                ticks: {
                  stepSize: 20,
                  padding: 10,
                  crossAlign: "far",
                  color: "#989898",
                  callback: (v) => `${v}%`,
                },
              },
              x: {
                grid: { border: { display: false }, lineWidth: 0 },
                ticks: { zIndex: 10, color: "#989898" },
              },
            },
          }}
          data={{
            labels: [
              "Apr 03",
              "Apr 04",
              "Apr 05",
              "Apr 06",
              "Apr 07",
              "Apr 08",
              "Apr 09",
              "Apr 10",
              "Today",
            ],
            datasets: [
              {
                label: "# of Votes",
                data: [28, 19, 65, 55, 89, 25, 23, 56, 22, 75],
                borderWidth: 5,
                tension: 0.2,
                borderColor: getGradient(),
                borderCapStyle: "round",
                backgroundColor: getFillGradient(),
                fill: true,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

function getGradient() {
  return ({ chart: { ctx, chartArea } }) => {
    if (!chartArea) return;
    const gradient = ctx.createLinearGradient(0, 0, 0.8 * chartArea.width, 0);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "#12FF6780");
    return gradient;
  };
}

function getFillGradient() {
  return ({ chart: { ctx, chartArea } }) => {
    if (!chartArea) return;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#12FF6780");
    gradient.addColorStop(1, "transparent");
    return gradient;
  };
}
