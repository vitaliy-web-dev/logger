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


// const apiKrey = 'a7e59e01a6518949ba2130b786f3d541';
const out = document.querySelector('.out');
const send = document.querySelector('#send');

// send.addEventListener('click', () => {
//     const input = document.querySelector('#input').value;
//     const num = 25;
//     switch(num) {
//         case 25 : out.textContent = 'winner number 25'; break;
//         case 20 : 
//         case 20 : 
//         case 20 : 
//         case 20 : 
//     }
// });

var num = 30;
switch (num) {
  case 25:
    alert( '25' );
    break;

  case 10:
  case 20:
  case 30:
  case 40:
    alert( 'От 1 до 4-х десятков' );
    break;

  default:
    alert( 'Числа нет в базе' );
}