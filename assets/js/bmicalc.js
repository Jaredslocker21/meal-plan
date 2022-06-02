
const button = document.querySelector("#calcbtn");
const result = document.querySelector("#result");

// Function for calculating BMI
function calculateBMI() {
  // take value height and add it as a string
  let heightInCm = document.querySelector("#height").value;
  // take value weight and add it as a string
  let weight = document.querySelector("#weight").value;


  // Correcting the values provided
  if (heightInCm === "" || weight === "") {
    result.innerHTML = "Invalid Input"
  } else {
    const heightInMtr = heightInCm/100;
    const bmi = (weight / (heightInMtr * heightInMtr)).toFixed(2);
    // Results of BMI prints the result
    if (bmi < 18.5) {
      result.innerHTML = `Increase Calories: BMI is <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal: BMI is <span>${bmi}</span>`;
    } else {
      result.innerHTML = `Decrease Calories: BMI is <span>${bmi}</span>`;
    }
  }
}

button.addEventListener("click", calculateBMI);