const express = require('express');
// Allows you to use various methods stored on express
const app = express();

app.get('', (req, res)=>{
    res.send('Hello Express')
})

app.get('/help', ()=>{
    res.send('Help page')
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000!')
})
