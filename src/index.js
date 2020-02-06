const express = require('express');
// Allows you to use various methods stored on express
const app = express();

app.get('', (req, res)=>{
    res.send('Hello Express')
})

app.get('/help', (req, res)=>{
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})
//Weather route
app.get('/weather', (req, res) => {
    res.send('Show weather')
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000!')
})
