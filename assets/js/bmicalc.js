let button = document.querySelector("#calcbtn");
let result = document.querySelector("#height");

/**Accepting height and weight into f(x)
 */
function calculateBMI() {
    // Input height as a string
    let height = document.querySelector("#height").value;
    //Input weight as a string
    let weight = document.querySelector("weight").value;


    // Calculation F(x)
    if (height === "") || (weight === "") {
        result.innerHTML = "Invalid Height"
    } else {


        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //results of BMI plus message
        if (bmi < 18.5) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Average : <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Overweight: <span>${bmi}</span>`
        }
    }
}
button.addEventListener("click", calculateBMI)