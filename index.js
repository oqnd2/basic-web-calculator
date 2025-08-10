const express = require("express");
const path = require("path");
const { addition, subtraction } = require("./operations");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});


app.post("/calculate", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    const additionResult = addition(num1, num2);
    const subtractionResult = subtraction(num1, num2);

    res.send(`
    <h1>Resultados</h1>
    <p>Suma: ${additionResult}</p>
    <p>Resta: ${subtractionResult}</p>
    <a href="/">Volver</a>
  `);
});

app.listen(3000, () => console.log("Server in http://localhost:3000"));