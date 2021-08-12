const express = require('express')

const app = express()

const port = process.env.PORT || 5151;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(port, () => {
    console.log(`We're rollin' on ${port}`)
})