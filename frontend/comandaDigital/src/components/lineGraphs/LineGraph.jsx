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
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom'
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

function LineGraph() {
    useAuth()

  const [dados30dias, setDados30Dias] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/pdv/30dias").then((res) => {
      setDados30Dias(res.data);
    })
    .catch(error => {
        if(error.status == 401) {
            localStorage.removeItem("token")
            alert("Login expirou, entre novamente")
            navigate('/login')
        }
    })
}, [navigate]);

const datas = dados30dias.map((item) => new Date(item.data_abertura).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }))
const saldo = dados30dias.map((item) => parseFloat(item.saldo_final))

  const formatData = {
    labels: datas,
     datasets: [
        {
            label: "Faturamento Diário (Últimos 30 Dias)",
            data: saldo,
            borderColor: '#2f9e44',
            backgroundColor: 'rgba(47, 158, 68, 0.16)',
            pointBackgroundColor: '#2f9e44',
            pointBorderColor: '#2f9e44',
            pointHoverBackgroundColor: '#2f9e44',
            pointHoverBorderColor: '#ffffff',
            pointRadius: 3,
            pointBorderWidth: 1,
            borderWidth: 2,
            tension: 0.35,
            fill: true,
        }
     ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          color: '#3f4b3f',
          font: {
            size: 12,
            weight: '600',
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: '#17351a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
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
          color: '#6f7d70',
          font: {
            size: 11,
            weight: '600',
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(49, 120, 45, 0.12)',
          drawTicks: false,
        },
        ticks: {
          color: '#6f7d70',
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

export default LineGraph;
