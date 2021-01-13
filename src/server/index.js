//var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')

const app = express()

//app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', (req, res) => {
   // res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
res.send("hello");
})

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})

// app.get('/test', (req, res) => {
//     res.send(mockAPIResponse)
// })
