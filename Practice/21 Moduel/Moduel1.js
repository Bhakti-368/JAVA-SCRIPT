function addition(n1,n2){
    console.log("Addition : ",n1+n2);
}

function subtraction(n1,n2){
    console.log("Subtraction : ",n1-n2);
}


// ES5
// module.exports = addition;
module.exports = {
    addition,subtraction
};