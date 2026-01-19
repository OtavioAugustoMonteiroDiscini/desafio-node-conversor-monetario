import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/health", (req, res) => {
    res.json({status: 'Funcionando!', message:'API está funcionando!'})
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})