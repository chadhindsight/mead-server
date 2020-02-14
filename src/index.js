/*jshint esversion: 6 */

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup the handlebars engine and the views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
// Specific to handebars partials
hbs.registerPartials(partialsPath);
// Setup static directory to serve from
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: "Chad Hinds"
    });
});
// About
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: "Chadrick Hinds"
    });
});
// Help
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Andrew Mead',
        msg: 'Have a query or need help with something? You are in the right place!'

    });
});
//Weather route
app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        });

    }
    
    geocode(req.query.address, (error, {lat, long, location})=>{
        if(error){
            return res.send({error});
        }
        forecast(lat, long, (error, forecastData)=>{
            if(error) {
                return res.send({error});
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });
        });
        
    });
});

// Error Routes
app.get('/help/*', (req, res) => {
    res.render('404',{
        errorMsg: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404',{
        errorMsg: 'Page not found!'
    });
});

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
});
