/*jshint esversion: 6 */

// request modeule allows you to make requests 
const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiY2hhZGhpbmRzaWdodCIsImEiOiJjazYxMnl2N3AwZW1pM2dsNmJ0Z3RvYnUwIn0.Bw8-ho5HJkOrseMjFhNAmw`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        }
        else if (body.features.length === 0) {
            callback('Unable to find that location. Please try another search', undefined);
        }
        else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;