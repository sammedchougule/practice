// import dependencies
const express = require("express")
// Create a new express application object
const app = express()

//middleware
app.use("/static", express.static("static"))

app.use("/static", express.static("cheese"))

//Routes
app.get("/test", (req, res) => {
    res.send("Hello")
})
// run your application, so it listens on port 4444
app.listen(4444, () => {
    console.log("Server is Listening on port 4444")
})