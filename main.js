// const apiKey = '21dadd8e1c94407e90b143448231704';

// // http://api.weatherapi.com/v1/current.json?key=21dadd8e1c94407e90b143448231704&q=London



// const btn = document.querySelector('#btn');
// const inp = document.querySelector('#inp');
// const main = document.querySelector('.main');

// let city;

// btn.addEventListener('click', () => {
//     city = inp.value.trim();
   
// const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

// fetch(url).then((response) => {
//     return response.json()
// }).then((data) => {
//     const html = `<div id='card'>
//     <h2> город - ${data.location.name}</h2>
//     <p id='p'>температура - ${data.current.temp_c}</p>
//     </div>
    
//     `
//     main.innerHTML = html;
//   })
// })


