const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 5151;

app.use(express.static('client'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(port, () => {
    console.log(`We're rollin' on ${port}`)
})