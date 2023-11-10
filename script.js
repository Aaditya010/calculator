let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let lastClickedEquals = false;
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      const result = eval(string);
      input.value = result;
      string = result.toString();
      lastClickedEquals = true;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
      lastClickedEquals = false;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
      lastClickedEquals = false;
    } else {
      if (
        lastClickedEquals &&
        !["+", "-", "/", "*"].includes(e.target.innerHTML)
      ) {
        input.value = e.target.innerHTML;
        string = e.target.innerHTML;
        lastClickedEquals = false;
      } else {
        string += e.target.innerHTML;
        input.value = string;
        lastClickedEquals = false;
      }
    }
  });
});
