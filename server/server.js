const express = require('express');
const mongoose = require('mongoose');
const testimonyRoute = require('./routes/testimony');
const worksRoute = require('./routes/works');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost/Addis-Construction", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB connected"))


// app.use('/api/works', worksRoute);
app.use('/api/testimony', testimonyRoute);
app.use('/api/works', worksRoute);

const port = process.env.PORT || '5000'

app.listen(port, ()=>console.log("Server has started on port "+port))