/*jshint esversion: 6 */
const request = require('request');

const forecast = (lat, long, callback)=>{
    let url = `https://api.darksky.net/forecast/ec10e2a85b08f8ecda0c057b3c7227b1/${lat},${long}`;

    request({ url, json: true }, (error, {body}) => {
    if(error) {
        callback('Unable to fetch weather data at this time');
    }
    else if(body.error) {
        callback('unable to find location', undefined);
    }
    else {
        callback(undefined, `${body.daily.data[0].summary} It is currently 
        ${body.currently.temperature} There is currently ${body.currently.precipProbability}% chance of rain.
        expect a high of ${body.daily.data[0].temperatureMax} degrees and low of ${body.daily.data[0].temperatureMin} degrees`)        
    }
});
};

module.exports = forecast;