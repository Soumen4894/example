const express = require('express')
const app = express();
const mongoose = require("mongoose")

app.use(express.json());

const PORT = 8000;
mongoose
    .connect("mongodb://127.0.0.1:27017/instagram", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

    app.get("/", (req, res) => {
        return res.json({
            success: true,
            message: 'Your server is up and running....'
        });
    });
    
    app.listen(PORT, () => {
        console.log(`App is running at ${PORT}`)
    })