

function getDataFromInputs() {
    let bodyWeight = document.getElementById("body_weight_input").value;
    let bodyHeight = document.getElementById("height").value;
    return [bodyWeight, bodyHeight];
}

function calculateBMI(weightAndHeight) {
    weightAndHeight = getDataFromInputs();
    return weightAndHeight[0] / ((weightAndHeight[1] /100)**2);
}

function displayBmiResult() {
    let result_h_tag = document.getElementById("bmi_result");
    // result_h_tag.innerHTML = "Give your data!";
    let bmiResult = calculateBMI();
    if (bmiResult == null) {
        result_h_tag.innerHTML = "Give your data!";
    }
    else{
        result_h_tag.innerHTML = "Your BMI = " +  bmiResult;
    }
}

function submitCalcData() {
    let submitButton = document.getElementById("submit_calc_data");
    submitButton.addEventListener('click', displayBmiResult);
}

submitCalcData();
