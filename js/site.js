// collect the user inputs
// AKA the Entry Point
function getValues() {
  // get the input element for startNumber and grab its value
  let startNumber = document.getElementById('startNumber').value;

  // do the same thing for endNumber
  let endNumber = document.getElementById('endNumber').value;

  startNumber = Number(startNumber);
  endNumber = Number(endNumber);

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber < 1 || endNumber > 100) {
    // display an error message
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: 'Please enter a valid number for TallyHo to use.',
      backdrop: false
    });
  } else {
    let generatedNumbers = generateValues(startNumber, endNumber);
    displayValues(generatedNumbers);
  }
}

// generate a list of numbers between those two values
function generateValues(start, end) {
  let numbers = [];

  for (let i = start; i <= end; i++) {
       numbers.push(i);
  }

  return numbers;
}

// display those numbers in my results table
function displayValues(numberArray) {

  let tableHtml = '';

  for (let index = 0; index < numberArray.length; index += 1) {
    
    let number = numberArray[index];

    let className = '';
    if (number % 2 == 0) {
      // use the class 'even' in the html
      className = 'even';
    } else {
      // use the class 'odd' in the html
      className = 'odd';
    }

    tableHtml += `<tr><td class="${className}">${number}</td></tr>`;
  }

  let tbody = document.getElementById('results');
  tbody.innerHTML = tableHtml;
}

/*

  <tr><td class="odd">1</td></tr>
  <tr><td class="even">2</td></tr>
  <tr><td class="odd">3</td></tr>
  <tr><td class="even">4</td></tr>
  <tr><td class="odd">5</td></tr>

*/