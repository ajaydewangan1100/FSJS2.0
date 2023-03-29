const express = require('express');

const app = express();

// difining port here we can use or || and give other port or available port
const port = 9000

// Sending response - Hello World
app.get('/',(req, res) => {
    res.send(`<h1>Hello World!</h1>`)
})


// if we want to access query of URL
app.get('/admin', (req, res) => {
    const id = req.query.search
    res.send(`<h2>Search Query is : ${id} </h2>`)
})

// if we want to access perticular data of URL
app.get('/admin/:id', (req, res) => {
    const id = req.params.id
    res.send(`<h2>You are Admin!<br />your id is: ${id}.</h2>`)
})

// if we want to access parameter of URL
app.get('/admin', (req, res) => {
    res.send(`<h2>Welcome Admin!</h2>`)
})

// making a listening port for starting the server and also printing port 
app.listen(port, () => {
    console.log(`Your app running on port: ${port}`)
})