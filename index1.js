function verificationNumber() {
  let x = document.getElementById("code").value;
  let text;
  if (isNaN(x) || x < 1 || x > 99) {
    text = "(Number doesn't match) Verification resend";}
  else {
    text = "Verified";
  }
  document.getElementById("checked").innerHTML = text;
}

function verificationNumber() {
  let x = document.getElementById("code").value;
  let text;
  if (isNaN(x) || x < 1 || x > 99) {
    text = "(Number doesn't match) Verification resend";}
  else {
    text = "Verified";
  }
  document.getElementById("checked").innerHTML = text;
}

var answers = { 1:'a' , 2:'f' , 3:'h' };

function checkQuestions() {

var form_elements = document.question_form.elements.length;
for ( var i = 0; i < form_elements; i++ ){
    var type = question_form.elements[i].type;
    if ( type == "radio" ){
    var quest = question_form.elements[i];
    var question_index = parseInt(quest.name.split('_')[1]);
    
    if ( quest.value == answers[question_index] ) {
    quest.parentNode.style.border = '1px solid green';
    quest.parentNode.style.color = 'green';}
    
    else {
    quest.parentNode.style.color = 'red';}
    }
  }
}

function checkQuestions() {

var form_elements = document.question_form.elements.length;
for ( var i = 0; i < form_elements; i++ ){
    var type = question_form.elements[i].type;
    if ( type == "radio" ){
    var quest = question_form.elements[i];
    var question_index = parseInt(quest.name.split('_')[1]);
    
    if ( quest.value == answers[question_index] ) {
    quest.parentNode.style.border = '1px solid green';
    quest.parentNode.style.color = 'green';}
    
    else {
    quest.parentNode.style.color = 'red';}
    }
  }
}