//Tanya Naydenova
var htmlFirst, htmlSecond;
function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).style.margin = "1px";
}
function isTrueSecondTask() {
    var firstGapFirstChild = document.getElementById("firstGap").children[0];
    var secondGapFirstChild = document.getElementById("secondGap").children[0];

    var isTrueFirst = firstGapFirstChild !== undefined && firstGapFirstChild !== null && firstGapFirstChild.id === "firstOption";
    var isTrueSecond = secondGapFirstChild !== undefined && secondGapFirstChild !== null && secondGapFirstChild.id === "secondOption";

    isTrueFirst && isTrueSecond ? document.getElementById("firstGap").style.borderBottom = "2px dotted green" :
        document.getElementById("firstGap").style.borderBottom = "2px dotted red";
    isTrueSecond && isTrueFirst ? document.getElementById("secondGap").style.borderBottom = "2px dotted green" :
        document.getElementById("secondGap").style.borderBottom = "2px dotted red";
}
function isTrueFirstTask() {
    var firstGapFirstChild = document.getElementById("firstLiGap").children[0];
    var secondGapFirstChild = document.getElementById("secondLiGap").children[0];
    var thirdGapFirstChild = document.getElementById("thirdLiGap").children[0];

    var isTrueFirst = firstGapFirstChild !== undefined && firstGapFirstChild !== null && firstGapFirstChild.id === "secondOptionLi";
    var isTrueSecond = secondGapFirstChild !== undefined && secondGapFirstChild !== null && secondGapFirstChild.id === "firstOptionLi";
    var isTrueThird = thirdGapFirstChild !== undefined && thirdGapFirstChild !== null && thirdGapFirstChild.id === "thirdOptionLi";

    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("firstLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("firstLiGap").style.borderBottom = "2px dotted red";
    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("secondLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("secondLiGap").style.borderBottom = "2px dotted red";
    isTrueFirst && isTrueSecond && isTrueThird ? document.getElementById("thirdLiGap").style.borderBottom = "2px dotted green" :
        document.getElementById("thirdLiGap").style.borderBottom = "2px dotted red";

}
function tryAgain() {
    var container = document.getElementById("second-task");
    container.innerHTML = htmlSecond;
}
function tryAgainFirst() {
    var container = document.getElementById("first-task");
    container.innerHTML = htmlFirst;
}
window.onload = function () {
    htmlFirst = document.getElementById("first-task").innerHTML;
    htmlSecond = document.getElementById("second-task").innerHTML;
};
//Yoana Yaneva
function verificationNumber() {
    let x = document.getElementById("code").value;
    let text;
    if (isNaN(x) || x < 1 || x > 99) {
        text = "(Number doesn't match) Verification resend";
    }
    else {
        text = "Verified";
    }
    document.getElementById("checked").innerHTML = text;
}

function verificationNumber() {
    let x = document.getElementById("code").value;
    let text;
    if (isNaN(x) || x < 1 || x > 99) {
        text = "(Number doesn't match) Verification resend";
    }
    else {
        text = "Verified";
    }
    document.getElementById("checked").innerHTML = text;
}

var answers = { 1: 'a', 2: 'f', 3: 'h' };

function checkQuestions() {

    var form_elements = document.question_form.elements.length;
    for (var i = 0; i < form_elements; i++) {
        var type = question_form.elements[i].type;
        if (type == "radio") {
            var quest = question_form.elements[i];
            var question_index = parseInt(quest.name.split('_')[1]);

            if (quest.value == answers[question_index]) {
                quest.parentNode.style.border = '1px solid green';
                quest.parentNode.style.color = 'green';
            }

            else {
                quest.parentNode.style.color = 'red';
            }
        }
    }
}

function checkQuestions() {

    var form_elements = document.question_form.elements.length;
    for (var i = 0; i < form_elements; i++) {
        var type = question_form.elements[i].type;
        if (type == "radio") {
            var quest = question_form.elements[i];
            var question_index = parseInt(quest.name.split('_')[1]);

            if (quest.value == answers[question_index]) {
                quest.parentNode.style.border = '1px solid green';
                quest.parentNode.style.color = 'green';
            }

            else {
                quest.parentNode.style.color = 'red';
            }
        }
    }
}
//Nikolay Filipov
function checkImage(answer) {
    let text = '';
    if (answer == 7) {
        text = 'Намерихте Уоли (Waldo)!';
        document.getElementById("answer-box").style.backgroundColor = "#CADC54";

    } else {
        text = 'Това не е Уоли (Waldo)! Опитайте пак!';
        document.getElementById("answer-box").style.backgroundColor = "#F31B19";

    }
    document.getElementById("answer-box").innerHTML = text;
}

function checkQuizAnswer(answer) {

    switch (answer) {
        case 1: {
            document.getElementById("btn-a").style.backgroundColor = '#F31B19';

            document.getElementById("btn-c").innerHTML = '';
            document.getElementById("btn-d").innerHTML = '';
        } break;
        case 2: {

        } break;
        case 3: {
            document.getElementById("btn-c").style.backgroundColor = '#F31B19';

            document.getElementById("btn-a").innerHTML = '';
            document.getElementById("btn-d").innerHTML = '';
        } break;
        case 4: {
            document.getElementById("btn-d").style.backgroundColor = '#F31B19';

            document.getElementById("btn-a").innerHTML = '';
            document.getElementById("btn-c").innerHTML = '';

        } break;
    }
    document.getElementById("btn-b").style.backgroundColor = '#F5AC00';
    document.getElementById("btn-b").style.color = '#532E07';
}
