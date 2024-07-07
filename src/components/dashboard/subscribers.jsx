import { Chart, registerables, defaults } from "chart.js";
import { Bar } from "react-chartjs-2";
import Icon from "../ui/icon";

Chart.register(...registerables);

defaults.font = {
  family: "Inter, sans-serif",
  size: 12,
  weight: 500,
};

export default function Subscribers() {
  return (
    <div className="dashboard-top gradient-border">
      <div className="dashboard-top__header">
        <h3 className="dashboard-top__title">
          Subscribes
          {/* prettier-ignore */}
          <Icon name="circle-info" />
        </h3>
      </div>

      <div style={{ height: "250px" }}>
        <Bar
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            layout: { padding: 20 },
            scales: {
              y: {
                border: { display: false },
                grid: { color: "#FFFFFF1A", lineWidth: 1 },
                ticks: {
                  stepSize: 20,
                  color: "white",
                  callback: (v) => `$${v}M`,
                  padding: 10,
                  crossAlign: "far",
                },
              },
              x: {
                grid: { border: { display: false }, lineWidth: 0 },
                ticks: { zIndex: 10, color: "white" },
              },
            },
          }}
          data={{
            labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            datasets: [
              {
                label: "Approved",
                data: [25, 55, 15, 5, 30, 60, 70, 25, 55, 35, 5, 27],
                backgroundColor: [...Array(12)].map(() => getGradient()),
                borderRadius: 7,
                borderSkipped: false,
                barThickness: 42.43,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 2,
                barPercentage: 0,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

function getGradient() {
  const canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "#95FFBB");
  gradient.addColorStop(1, "#FFFFFF");
  return gradient;
}
