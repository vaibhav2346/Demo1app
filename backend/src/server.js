const mg = require('mongoose')
const exp = require('express');

const app = exp()
app.use(exp.json());

mg.connect('mongodb://127.0.0.1:27017/miniapp').then(() => console.log(('connected to Mongodb')))

mg.set("strictQuery", false);

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log("Connected to Nodejs")
})


