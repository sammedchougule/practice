// HTTP server
const express = require('express');
const app = express()

const port = 3001

app.get('/route-handler', (req, res) => {
    res.json({
        name: "sammed chougule",
        age: 28,
        gender: 'male',
        nation: 'india'
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})