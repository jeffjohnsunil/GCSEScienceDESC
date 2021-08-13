function getResults(){
  answers = ["oxygen"];
  var q1 = document.getElementById("question1").value;
  numCorrect = 0;
  for(let i = 1; i < 2; i++){
    query = "question" + i;
    q = document.getElementById(query).value;
    if(answers.includes(q)){
      numCorrect++;
    }
  }
  alert(numCorrect);
  window.location.href="example.html";
}