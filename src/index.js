const path = require('path');
const express = require('express');
// The variable app allows you to use various methods stored on express
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('/help', (req, res)=>{
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About<h1/>')
})
//Weather route
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Pretty good and sunny',
        location: 'Miami, FL'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000!')
})
