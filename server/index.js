const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));

// Navigation
app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

// Start Express
const server = app.listen(port, () => console.info(`App listening on port ${port}`))

// TODO: Add Websocket Communication