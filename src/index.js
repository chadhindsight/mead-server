const path = require('path');
const express = require('express');
const hbs = require('hbs');

// The variable app allows you to use various methods stored on express
const app = express();
// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
// Setup static directory to serve from
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: "Chad Hinds"
    })
})
// About
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: "Chad Hinds"
    })
})
// Help
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'Have a query or need help with something? You are in the right place!'
    })
})
//Weather route
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Pretty good and sunny',
        location: 'Miami, FL'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
