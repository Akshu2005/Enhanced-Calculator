let string = "";
let memory = 0;  // Variable to store memory
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let btnValue = e.target.innerHTML;

    if (btnValue == '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        string = "Error";
        document.querySelector('input').value = string;
      }
    }
    else if (btnValue == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (btnValue == 'M+') {
      memory += parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
    }
    else if (btnValue == 'M-') {
      memory -= parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
    }
    else if (btnValue == 'MC') {
      memory = 0;
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      string = string + btnValue;
      document.querySelector('input').value = string;
    }
  });
});
