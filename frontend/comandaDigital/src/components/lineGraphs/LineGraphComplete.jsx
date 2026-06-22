import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import api from "../../api/Api";
import "./LineGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function LineGraphComplete() {
  const [dadosMensais, setDadosMensais] = useState([]);

  useEffect(() => {
    //arrumar esse ID
    api
      .get("http://localhost:3031/pdv/mensal/1")
      .then((res) => setDadosMensais(res.data))
      .catch((error) => console.log(error));
  }, []);

  const datas = dadosMensais.map((item) =>
    new Date(item.mes).toLocaleDateString("pt-BR", {
      month: "2-digit",
      year: "2-digit",
    }),
  );
  const faturamento = dadosMensais.map((item) =>
    parseFloat(item.total_vendido),
  );

  const formatData = {
    labels: datas,
    datasets: [
      {
        label: "Faturamento por mês",
        data: faturamento,
        borderColor: "#0f8fa6",
        backgroundColor: "rgba(15, 143, 166, 0.16)",
        pointBackgroundColor: "#0f8fa6",
        pointBorderColor: "#0f8fa6",
        pointHoverBackgroundColor: "#0f8fa6",
        pointHoverBorderColor: "#ffffff",
        pointRadius: 3,
        pointBorderWidth: 1,
        borderWidth: 2,
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          color: "#30464b",
          font: {
            size: 12,
            weight: "600",
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "#0e3138",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 10,
        displayColors: false,
        callbacks: {
          label: (context) =>
            ` ${Number(context.parsed.y || 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#687b80",
          font: {
            size: 11,
            weight: "600",
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(15, 143, 166, 0.12)",
          drawTicks: false,
        },
        ticks: {
          color: "#687b80",
          padding: 10,
          callback: (value) =>
            Number(value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            }),
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="line-graph">
      <Line options={options} data={formatData} />
    </div>
  );
}
export default LineGraphComplete;
