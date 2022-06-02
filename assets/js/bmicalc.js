
let button = document.querySelector("#calcbtn");
let result = document.querySelector("#result");

// Function for calculating BMI
function calculateBMI() {
  // take height and add it as a string
  let height = document.querySelector("#height").value;
  // take weight and add it as a string
  let weight = document.querySelector("#weight").value;


  // Correcting the values provided
  if (height === "" || weight === "") {
    result.innerHTML = "Invalid height"
  } else {
    
    // Fixes up too two decimal points
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    // Results of BMI prints the result
    if (bmi < 18.6) {
      result.innerHTML = `Increase Calories: BMI is <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal: BMI is <span>${bmi}</span>`;
    } else {
      result.innerHTML = `Decrease Calories: BMI is <span>${bmi}</span>`;
    }
  }
}

button.addEventListener("click", calculateBMI);