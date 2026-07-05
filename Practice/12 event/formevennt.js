// console.log(document.querySelector('input'));

// document.querySelector('input').onfocus = function (){
//     //
//     console.log("Focus");
// }

// document.querySelector('input').onchange = function(event){
//       document.querySelector('span').innerHTML = event.target.value;
// }


document.querySelector('form').onsubmit = function(event){
    event.preventDefault();

    document.querySelector('span').innerHTML = document.querySelector('input').value;
}