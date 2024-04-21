document.getElementById("clear").onclick = function () {
  document.getElementById("display").value = "";
};

document.getElementById("delete").onclick = function () {
  document.getElementById("display").value = document
    .getElementById("display")
    .value.toString()
    .slice(0, -1);
};

document.getElementById("dot").onclick = function () {
  document.getElementById("display").value += ".";
};

document.getElementById("divide").onclick = function () {
  document.getElementById("display").value += "/";
};

document.getElementById("seven").onclick = function () {
  document.getElementById("display").value += "7";
};

document.getElementById("eight").onclick = function () {
  document.getElementById("display").value += "8";
};

document.getElementById("nine").onclick = function () {
  document.getElementById("display").value += "9";
};

document.getElementById("multiply").onclick = function () {
  document.getElementById("display").value += "*";
};

document.getElementById("four").onclick = function () {
  document.getElementById("display").value += "4";
};

document.getElementById("five").onclick = function () {
  document.getElementById("display").value += "5";
};

document.getElementById("six").onclick = function () {
  document.getElementById("display").value += "6";
};

document.getElementById("subtract").onclick = function () {
  document.getElementById("display").value += "-";
};

document.getElementById("one").onclick = function () {
  document.getElementById("display").value += "1";
};

document.getElementById("two").onclick = function () {
  document.getElementById("display").value += "2";
};

document.getElementById("three").onclick = function () {
  document.getElementById("display").value += "3";
};

document.getElementById("add").onclick = function () {
  document.getElementById("display").value += "+";
};

document.getElementById("doubleZero").onclick = function () {
  document.getElementById("display").value += "00";
};

document.getElementById("zero").onclick = function () {
  document.getElementById("display").value += "0";
};

document.getElementById("equal").onclick = function () {
  document.getElementById("display").value = eval(
    document.getElementById("display").value
  );
};
