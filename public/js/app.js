console.log('Client side javascript file is loaded')



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // Extract the input text from above value
    const location = search.value;
    messageOne.textContent = 'Now loading...'
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error

            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

})
