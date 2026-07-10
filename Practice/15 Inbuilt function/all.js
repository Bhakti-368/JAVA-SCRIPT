var id;
document.querySelector('.start').onclick = function () {
var timer = document.querySelector('span').innerText;

    id = setInterval(() => {
        if(timer==0){
            clearInterval(id);
            setTimeout(()=>{
                document.querySelector('p').style.display = "block";
            },1000);
        }
        document.querySelector('span').innerText = timer--;
    }, 1000);
}


document.querySelector('.end').onclick = function () {
    clearInterval(id);
}


document.querySelector('.reset').onclick = function () {
    clearInterval(id);
    document.querySelector('span').innerText = "10";

}