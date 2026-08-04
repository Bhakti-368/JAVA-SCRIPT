const Questions = [
  {
    question: "What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Browser",
      "Operating System"
    ],
    answer: "Programming Language"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "let",
      "print",
      "echo",
      "int"
    ],
    answer: "let"
  },
  {
    question: "Which method is used to display output in the browser console?",
    options: [
      "console.log()",
      "document.write()",
      "alert()",
      "prompt()"
    ],
    answer: "console.log()"
  }
];
document.querySelector('article').onclick = function () {
  // document.querySelector('.wrapper').style.display = "block";
  document.querySelector(".wrapper").classList.remove('none');
  document.querySelector('article').style.display = "none";
  getQuestion(index);
}


let index = 0;
var second;
var id;
let score = 0;
var tempindex=0;
var skipQuestions = [];
var flag = 0;
function Timer(t1, t2) {
  setTimeout(() => {
    document.querySelectorAll('.timer span')[0].innerHTML = "00";
    document.querySelectorAll('.timer span')[1].innerText = "15";
    second = document.querySelectorAll('.timer span')[1].innerText;
  }, t1);

  id = setInterval(() => {
    if(second == 0){
      clearInterval(id);
      alert("Timp Up !!");

        if(Questions.length-1 > index){
          index++;
        }else{
          return;
        }
        getQuestion(index);
    }
    document.querySelectorAll('.timer span')[1].innerText = `${second--}`;
  }, t2);
}
function getQuestion(index) {
  document.querySelectorAll('.timer span')[0].innerText = "00";
  document.querySelectorAll('.timer span')[1].innerText = "15";
  if(index >= Questions.length){
    document.querySelector('form .submit').classList.add("none");
    return;
  }
  document.querySelector('form .submit').classList.remove("none");
  if (index == 0) {
    document.querySelector(".pre").disabled = true;
    document.querySelector(".pre").classList.add('no-cursor');
    Timer(1000, 1000);

  } else if (index == Questions.length-1) {
    document.querySelector(".next").disabled = true;
    document.querySelector(".next").classList.add('no-cursor');
  } else {
    document.querySelectorAll('form input')[0].classList.remove("no-cursor");
    document.querySelector(".pre").disabled = false;
    document.querySelector(".next").classList.remove('no-cursor');
    document.querySelector(".next").disabled = false;
    Timer(1000, 2000);
  } 


  document.querySelectorAll('main')[1].innerHTML = `
    <section>
        <h2>${Questions[index].question}</h2>
        <article>
            <aside><input form="myform" value="${Questions[index].options[0]}" type="radio" name="mcq" id="id1"> <label for="id1">${Questions[index].options[0]}</label></aside>
            <aside><input form="myform" value="${Questions[index].options[1]}" type="radio" name="mcq" id="id2"> <label for="id2">${Questions[index].options[1]}</label></aside>
            <aside><input form="myform" value="${Questions[index].options[2]}" type="radio" name="mcq" id="id3"> <label for="id3">${Questions[index].options[2]}</label></aside>
            <aside><input form="myform" value="${Questions[index].options[3]}" type="radio" name="mcq" id="id4"> <label for="id4">${Questions[index].options[3]}</label></aside>
        </article>
    </section>
    `;
}

function result(){
    document.querySelector('.wrapper').classList.add('none');
      document.querySelector('.result').style.display = "block";
     document.querySelector('.result').innerHTML = score;
}



document.querySelector(".next").onclick = function () {
  clearInterval(id);
  skipQuestions.push(index);
  getQuestion(++index);
}
document.querySelector(".pre").onclick = function () {
  getQuestion(--index);
}


document.querySelector('form').onsubmit = function (e) {
  e.preventDefault();
  clearInterval(id);
  for (let i = 0; i < Questions[index].options.length; i++) {
    if (e.target[i].checked) {
      if(e.target[i].value == Questions[index].answer){
        score++;
      }
      break;
    }
  }
  if(index == Questions.length-1){
    document.querySelector('.pre').style.visibility = "hidden";
    document.querySelector('.next').style.visibility = "hidden";
    
    flag = 1;
    if(skipQuestions.length-1 > tempindex){
      index = skipQuestions[tempindex];
      return; 
    }else{
      result();
      return;
    }
    
    getQuestion(index);
    return;
  }
  if(flag){
    if(skipQuestions.length-1 > tempindex){
      tempindex++;
    }else{
      result();
      return;
    }
    index = skipQuestions[tempindex];
    getQuestion(index);
    return;
  }




  getQuestion(++index);
}

// skip : 5   : 0 1 2 3 4

/*
  if(4>4){
    index++;
  }else
*/