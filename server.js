const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let reports = [];

app.post("/report", (req,res)=>{
reports.push(req.body);
res.send("Report added");
});

app.get("/reports",(req,res)=>{
res.json(reports);
});

app.listen(3000,()=>{
console.log("Server running");
});
