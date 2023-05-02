const express = require('express'); 
const app = express() 
const port = 5000; 

app.get('/', (req, res) => {

    res.send(`Welcome to WeChef.com server`)
})

app.listen(port, () => {

    console.log(`This server is listening to the port number ${port}`);
})