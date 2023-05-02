const express = require('express'); 
const app = express() 
const port = 5000; 

const allChefs = require('./data/chefs.json')

app.get('/', (req, res) => {

    res.send("Welcome to WeChef"); 
})

app.get('/allChefs', (req, res) => {

    res.send(allChefs); 
})
app.get('/allChefs/:id', (req, res) => {

    const id = req.params.id; 
    
    const selectedChef = allChefs.find( chefs => chefs.id == id)
    res.send(selectedChef);
    
})

app.listen(port, () => {

    console.log(`This server is listening to the port number ${port}`);
})