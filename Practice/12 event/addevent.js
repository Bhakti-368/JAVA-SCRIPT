// document.querySelector('button').onclick = function(){
//     console.log("Here");
// }



// document.querySelector('button').addEventListener('click',function(){
//     console.log("Here");
// });


// document.body.onclick = function(){
//     window.a = 12;
//     console.log("Body Event Trigered");
// }


// document.querySelector('div').onclick = function(){
//     console.log("Div Event Trigered");
// }

// document.querySelector('h1').onclick = function(){
//     console.log("H1 Event Trigered");
//     console.log(window.a);
// }


// document.body.addEventListener('click',function(){
//     window.a = 12;
//     console.log("Body Event Trigered");
// },true);
document.body.addEventListener('click',function(){
    window.a = 12;
    console.log("Body Event Trigered");
},{capture : true});

document.querySelector('div').addEventListener('click', function(){
    console.log("Div Event Trigered");
},false);

document.querySelector('h1').addEventListener('click', function(){
    console.log("H1 Event Trigered");
    console.log(window.a);
},false);