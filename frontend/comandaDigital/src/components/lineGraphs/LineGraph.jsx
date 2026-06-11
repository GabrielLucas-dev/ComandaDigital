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
} from "chart.js";
import { useEffect, useState } from "react";
import api from "../../api/Api";
import { useAuth } from "../../hooks/useAuth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineGraph() {
    useAuth()

  const [dados30dias, setDados30Dias] = useState([]);

  useEffect(() => {
    api.get("http://localhost:3031/pdv/30dias").then((res) => {
      setDados30Dias(res.data);
    });
}, []);

const datas = dados30dias.map((item) => new Date(item.data_abertura).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }))
const saldo = dados30dias.map((item) => parseFloat(item.saldo_final))

  const formatData = {
    labels: datas,
     datasets: [
        {
            label: "Últimos 30 Dias",
            data: saldo,
            borderColor: '#31782d',
            backgroundColor: '#31782d'
        }
     ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return (
    <>
      <Line options={options} data={formatData} />
    </>
  );
}

export default LineGraph;
