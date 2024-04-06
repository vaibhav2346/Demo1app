const mg = require('mongoose')
const exp = require('express');
const routes = require('./routers/routes')
const cors = require('cors');
const app = exp()
app.use(exp.json());

app.use(cors({origin:'http://localhost:3000'}));

mg.connect('mongodb+srv://Himan12:App123@cluster0.5nqghhb.mongodb.net/miniapp?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log(('connected to Mongodb')))


app.use('/api', routes )


mg.set("strictQuery", false);

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log("Connected to Nodejs")
})


