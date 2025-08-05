let count = 0;

function updateDisplay() {
  document.querySelector('.count').innerHTML = count;
}

function changeIncreaseBtn() {
  let btn = document.getElementById('increased');
  btn.innerText = "Increased";
  btn.style.color = "white";
  btn.style.background = "blue";
  btn.style.border = "none"
}
function changeCountGreen(){
  let count = document.querySelector('.count');
  count.style.color = "white";
  count.style.background = "green";
}

function changeDecreaseBtn() {
  let btn = document.getElementById('decreased');
  btn.innerText = "Decreased";
  btn.style.color = "white";
  btn.style.background = "blue";
  btn.style.border = "none";
}
function changeCountRed(){
  let count = document.querySelector('.count');
  count.style.color = "white";
  count.style.background = "red";
}

function changeResetBtn() {
  let btn = document.getElementById('reset');
  btn.style.color = "white";
  btn.style.background = "blue";
  btn.style.border = "none";
}
function changeCountBlack(){
  let count = document.querySelector('.count');
  count.style.color = "black";
  count.style.background = "#f3e5f5";
}
function rawBtnStyle(flag) {
  let btn = document.getElementsByTagName('button');
  for (let i = 0; i < 3; i++) {
    if (flag != i) {
      btn[i].style.color = "black";
      btn[i].style.background = "white";
      btn[i].style.border = "2px solid black";
    }
  }

}

function noDecRe() {
  rawBtnStyle(0);
  document.getElementById('decreased').innerText = "Decrease";
}

function noIncRe() {
  rawBtnStyle(1);
  document.getElementById('increased').innerText = "Increase";
}
function noIncDec() {
  rawBtnStyle(2);
  document.getElementById('decreased').innerText = "Decrease";
  document.getElementById('increased').innerText = "Increase";
}
function increase() {
  count++;
  updateDisplay();
}
function decrease() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}