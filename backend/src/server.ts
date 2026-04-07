import express from "express"
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())


const PORT: number = 3031;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
