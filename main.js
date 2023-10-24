// Quiz

// btn event listener
document.getElementById("btn").addEventListener("click", btnClicked);
let msgE1 = document.getElementById("msg");
let correctE1 = document.getElementById("correct-out");

let numCorrect = 0;
let numSpan = document.getElementById("ans1");
// BTN CLICK FUNCTION
function btnClicked() {
  let msg = document.getElementById("srch1").value.toLowerCase();
  let msg2 = document.getElementById("srch2").value.toLowerCase();
  let msg3 = document.getElementById("srch3").value.toLowerCase();
  let msg4 = document.getElementById("srch4").value.toLowerCase();
  let msg5 = document.getElementById("srch5").value.toLowerCase();
  // MSG1 in/out
  if (msg === "dna") {
    document.getElementById("ans1").innerHTML = "Correct";
    numCorrect = numCorrect + 1;
    correctE1.innerHTML = numCorrect;
  } else {
    document.getElementById("ans1").innerHTML = "Incorrect";
  }
  // MSG2 in/out
  if (msg2 === "phospholipids" || msg2 === "phospholipid bilayer") {
    document.getElementById("ans2").innerHTML = "Correct";
    numCorrect = numCorrect + 1;
    correctE1.innerHTML = numCorrect;
  } else {
    document.getElementById("ans2").innerHTML = "Incorrect";
  }
  // MSG3 in/out
  if (msg3 === "villi") {
    document.getElementById("ans3").innerHTML = "Correct";
    numCorrect = numCorrect + 1;
    correctE1.innerHTML = numCorrect;
  } else {
    document.getElementById("ans3").innerHTML = "Incorrect";
  }
  // MSG4 in/out
  if (msg4 === "4.0") {
    document.getElementById("ans4").innerHTML = "Correct";
    numCorrect = numCorrect + 1;
    correctE1.innerHTML = numCorrect;
  } else {
    document.getElementById("ans4").innerHTML = "Incorrect";
  }
  // MSG5 in/out
  if (msg5 === "46") {
    document.getElementById("ans5").innerHTML = "Correct";
    numCorrect = numCorrect + 1;
    correctE1.innerHTML = numCorrect;
  } else {
    document.getElementById("ans5").innerHTML = "Incorrect";
  }
  // TOTAL SCORE
  let total = (numCorrect / 5) * 100;
  document.getElementById("output").innerHTML = total;
  // FEEDBACK
  if (numCorrect === 0) {
    msgE1.innerHTML = `<p>Maybe you should go study...</p>`;
  } else if (numCorrect === 1) {
    msgE1.innerHTML = `<p>Yay, you got 1 thing correct!</p>`;
  } else if (numCorrect === 2) {
    msgE1.innerHTML = `<p>Some practice... and you'll be perfect!</p>`;
  } else if (numCorrect === 3) {
    msgE1.innerHTML = `<p>Better luck next time...</p>`;
  } else if (numCorrect === 4) {
    msgE1.innerHTML = `<p>Good Job!</p>`;
  } else if (numCorrect === 5) {
    msgE1.innerHTML = `<p>Great Job!!</p>`;
  }
}
