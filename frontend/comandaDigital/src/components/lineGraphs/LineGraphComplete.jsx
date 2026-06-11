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

function LineGraphComplete(){

    const [dadosMensais, setDadosMensais] = useState([])

    useEffect(() => {                      //arrumar esse ID
        api.get("http://localhost:3031/pdv/mensal/1")
        .then(res => setDadosMensais(res.data))
        .catch(error => console.log(error))
    }, [])

    const datas = dadosMensais.map((item) => new Date(item.mes).toLocaleDateString("pt-BR", { month: "2-digit", year: "2-digit" }))
    const faturamento = dadosMensais.map((item) => parseFloat(item.total_vendido))

    const formatData = {
        labels: datas,
        datasets: [
            {
                label: "Faturamento por mês",
                data: faturamento,
                borderColor: '#31782d',
                backgroundColor: '#31782d'
            },
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
        <Line options={options} data={formatData}/>
        </>
    )
}
export default LineGraphComplete