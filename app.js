const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(__dirname + '/node_modules'))
app.use('/', express.static(__dirname + '/olmap'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})