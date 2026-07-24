let Questions = [
  {
    question: "1. What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Browser",
      "Operating System"
    ],
    answer: "Programming Language"
  },
  {
    question: "2. Which keyword is used to declare a variable?",
    options: [
      "var",
      "int",
      "string",
      "float"
    ],
    answer: "var"
  },
  {
    question: "3. Which symbol is used for single-line comments?",
    options: [
      "//",
      "/* */",
      "#",
      "<!-- -->"
    ],
    answer: "//"
  },
  {
    question: "4. Which method displays a message in a popup box?",
    options: [
      "alert()",
      "print()",
      "display()",
      "show()"
    ],
    answer: "alert()"
  },
  {
    question: "5. Which function is used to print output in the browser console?",
    options: [
      "console.log()",
      "document.write()",
      "alert()",
      "print()"
    ],
    answer: "console.log()"
  },
  {
    question: "6. Which operator is used for strict equality?",
    options: [
      "===",
      "==",
      "=",
      "!="
    ],
    answer: "==="
  },
  {
    question: "7. Which loop executes at least once?",
    options: [
      "do...while",
      "while",
      "for",
      "foreach"
    ],
    answer: "do...while"
  },
  {
    question: "8. Which method is used to add an element at the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "push()"
  },
  {
    question: "9. Which keyword is used to define a function?",
    options: [
      "function",
      "define",
      "method",
      "func"
    ],
    answer: "function"
  },
  {
    question: "10. Which data type represents true or false values?",
    options: [
      "Boolean",
      "Number",
      "String",
      "Object"
    ],
    answer: "Boolean"
  }
];

document.querySelector(".start-btn").onclick = function () {

    document.querySelector(".wrapper").classList.remove("none");
    document.querySelector(".start").style.display = "none";

    getQuestion(index);
    Timer();

};

let index = 0;
let score = 0;
let timer;
var skipQuestions = [];
let tempindex = 0;
let flage;
let correct = 0;
let wrong = 0;
let notAttempted = 0;
let userAnswers = [];

function Timer() {

    clearInterval(timer);

    let minit = 1;
    let second = 0;

    document.querySelectorAll(".timer span")[0].innerText = minit;
    document.querySelectorAll(".timer span")[1].innerText = "00";

    timer = setInterval(() => {

        if (second == 0) {

            if (minit == 0) {

                clearInterval(timer);

                skipQuestions.push(index);

                if (index < Questions.length - 1) {

                    index++;
                    getQuestion(index);
                    Timer();

                } else {

                    document.querySelector("#quiz-form").submit();

                }

                return;
            }

            minit--;
            second = 59;

        } else {

            second--;

        }

        document.querySelectorAll(".timer span")[0].innerText = minit;
        document.querySelectorAll(".timer span")[1].innerText = second < 10 ? "0" + second : second;

    }, 1000);

}
function getQuestion(index) {
    if (index >= Questions.length) {
        document.querySelector(".submit-btn").classList.add("none");
        return;
    }
    document.querySelector(".submit-btn").classList.remove("none");

    if (index == 0) {
        document.querySelector(".pre").disabled = true;
        document.querySelector(".pre").classList.add('no-curser');
    }
    else {
        document.querySelector(".pre").disabled = false;
        document.querySelector(".pre").classList.remove('no-curser');
    }

    if (index == Questions.length - 1) {
        document.querySelector(".next").disabled = true;
        document.querySelector(".next").classList.add('no-curser');
    }

    else {
        document.querySelector(".next").disabled = false;
        document.querySelector(".next").classList.remove('no-curser');
    }


    document.querySelector("form").innerHTML = `
    <section>
    <h2>${Questions[index].question}</h2>
    <article>
    <aside><input type="radio" name = "ans" id = "id1" value = "${Questions[index].options[0]}"><label for="id1">${Questions[index].options[0]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id2" value = "${Questions[index].options[1]}"><label for="id2">${Questions[index].options[1]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id3" value = "${Questions[index].options[2]}"><label for="id3">${Questions[index].options[2]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id4" value = "${Questions[index].options[3]}"><label for="id4">${Questions[index].options[3]}</label></aside>
    </article>
    </section>
    `;

    if (userAnswers[index]) {

        let inputs = document.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].value == userAnswers[index]) {
                inputs[i].checked = true;
            }

        }

    }
    document.querySelector(".submit-btn").classList.remove("none");

}

getQuestion(index);

document.querySelector(".next-btn").onclick = function () {

    for (let i = 0; i < Questions[index].option.length; i++) {
        if (document.querySelectorAll("input")[i].checked) {
            userAnswers[index] = document.querySelectorAll("input")[i].value;
            break;
        }
    }

    clearInterval(timer);
    getQuestion(++index);
    Timer();

};

document.querySelector(".previous-btn").onclick = function () {
    for (let i = 0; i < Questions[index].options.length; i++) {
        if (document.querySelectorAll("input")[i].checked) {
            userAnswers[index] = document.querySelectorAll("input")[i].value;
            break;
        }
    }

    clearInterval(timer);
    getQuestion(--index);
    Timer();
};
document.querySelector("#quiz-form").onsubmit = function (e) {
    e.preventDefault();


    let selected = false;

    for (let i = 0; i < Questions[index].options.length; i++) {

        if (document.querySelectorAll("input")[i].checked) {

            userAnswers[index] = document.querySelectorAll("input")[i].value;
            selected = true;
            break;
        }
    }


    

    if (!selected) {
        userAnswers[index] = undefined;
    }

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    clearInterval(timer);

    if (index == Questions.length - 1) {

        correct = 0;
        wrong = 0;
        notAttempted = 0;

        for (let i = 0; i < Questions.length; i++) {

            if (userAnswers[i] == undefined) {
                notAttempted++;
            }
            else if (userAnswers[i] == Questions[i].answer) {
                correct++;
            }
            else {
                wrong++;
            }
        }

        showResult();
        return;
    }
    index++;
    getQuestion(index);
    Timer();
};



function showResult() {
    document.querySelector(".wrapper").classList.add("none");
    document.querySelector(".footer").classList.remove("none");

    document.querySelector(".footer").innerHTML = `
    <h1>Quiz Result</h1>

    <h2>Total Questions : ${Questions.length}</h2>

    <h2>Correct Answers : ${correct}</h2>

    <h2>Wrong Answers : ${wrong}</h2>

    <h2>Not Attempted : ${notAttempted}</h2>

    <h2>Final Score : ${correct} / ${Questions.length}</h2>
`;
}