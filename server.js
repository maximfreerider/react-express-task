const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const apiRoutes = require("./routes/apiRoutes")
app.use('/users', apiRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});


db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`)
        })
    })
