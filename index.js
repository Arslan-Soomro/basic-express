const app = require('express')();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Basic Express</h1>");
});

app.get("/owner", (req, res) => {
    res.json({ name: "Arslan"});
})

app.listen(PORT, (req, res) => {
    console.log("Server Running...");
})
