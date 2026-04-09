import express from "express";
import cors from "cors";
import produtosRoute from "./routes/produtosRoute.js";
import categoriasRoute from './routes/categoriasRoute.js'
import complementosRoute from './routes/complementosRoute.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/categorias", categoriasRoute)
app.use("/produtos", produtosRoute);
app.use("/complementos", complementosRoute)

app.get("/", (req, res) => {
  res.send({ message: "teste" });
});

const PORT: number = 3031;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
