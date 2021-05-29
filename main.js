// Object question
var quiz = [
    { question: "2 x 3 = ?", choices: [1, 2, 6, 4], correctAnswer: 6 },
    { question: "3 x 4 = ?", choices: [12, 2, 3, 4], correctAnswer: 12 },
    { question: "4 x 5 = ?", choices: [1, 20, 3, 4], correctAnswer: 20 },
    { question: "5 x 6 = ?", choices: [1, 2, 30, 4], correctAnswer: 30 }
];
// Variable
var onStart = document.querySelector('.start__btn');
var notification = document.querySelector(".notification");
var quesDetail = document.querySelector('.question__detail');
var countdown;
// When click button start => time countdown
function startClick() {
    onStart.disabled = true;
    disButton(false);
    countdown = setInterval(function () {
        var seconds = document.getElementById("time").textContent;
        seconds--;
        document.getElementById("time").innerHTML = seconds;
        if (seconds <= 0) {
            clearInterval(countdown); // ngắt lặp lại
            notification.style.display = "inline";
            document.getElementById("time").innerHTML = "10";
            disButton(true);
        }
    }, 1000);
}
// Onclick Ok Notification
function timeUp() {
    notification.style.display = "none";
    onStart.disabled = false;
    disButton(true);
    count = 0;
    score = 0;
    document.querySelector('.score span').innerHTML = "0";
    createQuestionElement(count);
}
// Restart
function restart() {
    score = 0;
    document.querySelector('.score span').innerHTML = score;
    document.getElementById("time").innerHTML = "10";
    onStart.disabled = false;
    disButton(true);
    count = 0;
    createQuestionElement(count);
    clearInterval(countdown);
}
// Show Correct or Incorrect// check true false
var showMessage = document.querySelector('.showMessage');
var count = 0;
var score = 0;
function reply_click(clicked_id) {
    if (checkEnd(count)) {
        notification.style.display = "inline";
        restart()
    } else {
        var x = document.getElementById(clicked_id).textContent;
        var correctAnswer = quiz[count].correctAnswer;
        if (x == correctAnswer) {
            score++;
            countScore(score);
            showMessage.innerHTML = "<h3>Correct!!!</3>";
            showMessage.style.backgroundColor = "#8bd3dd";
            showMessage.style.display = "inline";
            setTimeout(function () {
                showMessage.style.display = "none";
            }, 500);
        } else {
            showMessage.innerHTML = "<h3>Incorrect!!!</3>";
            showMessage.style.backgroundColor = "#e45858";
            showMessage.style.display = "inline";
            setTimeout(function () {
                showMessage.style.display = "none";
            }, 500);
        }
        count++;
        createQuestionElement(count);
    }
}
// Created new question
function createQuestionElement(index) {
    var question = quiz[index].question;
    var choiccc = quiz[index].choices;
    quesDetail.innerHTML = question;
    for (let i = 0; i < choiccc.length; i++) {
        var butt = document.getElementById('but' + i);
        butt.innerHTML = choiccc[i];
    }
}
// Display score
function countScore(score) {
    document.querySelector('.score span').innerHTML = score;
    document.getElementById('noti__score').innerHTML = score;
}
// Disabled button
function disButton(bool) {
    var elems = document.getElementsByClassName("answer__btn");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = bool;
    }
}
// Check WIn
function checkEnd(x) {
    //get ra số câu hỏi
    //so sánh số câu hỏi với count
    // nếu count = length ques thì dừng
    var totalQuestion = quiz.length - 1;
    if (totalQuestion == x) {
        return true;
    } else {
        return false;
    }
}
createQuestionElement(0);
disButton(true);