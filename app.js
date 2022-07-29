const BMIData = [
  { name: 'Thin', color: 'midnightblue', range: [0, 18.5] },
  { name: 'Good health', color: 'green', range: [18.5, 25] },
  { name: 'Slightly overweighted', color: 'lightcoral', range: [25, 30] },
  { name: 'Moderatly overweighted', color: 'orange', range: [30, 35] },
  { name: 'Obesity', color: 'crimson', range: [35, 40] },
  { name: 'Morbid obesity', color: 'purple', range: 40 },
];
const inputs = document.querySelectorAll('input');
const displayBMI = document.querySelector('.bmi-value');
const result = document.querySelector('.result');
const form = document.querySelector('form');

form.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();

  calculateBMI();
}

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    //console.log('Error');
    handleError();
    return;
  }

  // Math.pow = changing the centimeters in meters and calcul it as squared
  // toFixed = keep one number after the comma
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  //console.log(BMI);

  showResult(BMI);
}

function handleError() {
  displayBMI.textContent = 'Woops !';
  displayBMI.style.color = 'inherit';
  result.textContent = 'Please enter correct values.';
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === 'number' && BMI >= data.range) return data;
  });
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `${rank.name}`;
}
