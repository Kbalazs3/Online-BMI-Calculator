

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
    let bmiResult = calculateBMI();
    result_h_tag.innerHTML = "Your BMI = " +  bmiResult.toFixed(2);
    let ass_p_tag = document.getElementById("assertion_p_tag");
    let assertion_div = document.getElementById("assertion_div");
    if(bmiResult >= 20.5 && bmiResult < 26.5) {
        ass_p_tag.innerHTML = "Normal body mass index. Great Job! :)";
        assertion_div.style.backgroundColor = "green";
        ass_p_tag.style.color = "white";
    }
    else if(bmiResult >= 26.6 && bmiResult <= 31.9) {
        ass_p_tag.innerHTML = "Overweight. You have to loose a few kg-s.\nSuggestions:\n- Eat less!\nSport!!";
        assertion_div.style.backgroundColor = "yellow";
        ass_p_tag.style.color = "black";
    }

    else if(bmiResult >= 32.0 && bmiResult <= 36.9) {
        ass_p_tag.innerHTML = "1. Level Obesity. You have to loose a few kg-s.\nSuggestions:\n- Eat less!\nSport!!";
        assertion_div.style.backgroundColor = "orange";
        ass_p_tag.style.color = "black";
    }
        else if(bmiResult >= 37.0 && bmiResult <= 41.9) {
        ass_p_tag.innerHTML = "2. Level Obesity. You have to loose weight!.\nSuggestions:\n- Eat less!\nSport!!";
        assertion_div.style.backgroundColor = "orange";
        ass_p_tag.style.color = "black";
    }
        else if(bmiResult >= 42.0) {
        ass_p_tag.innerHTML = "3. Level Obesity. You have to loose weight! Fast!!.\nSuggestions:\n- Eat less!\nSport!!";
        assertion_div.style.backgroundColor = "red";
        ass_p_tag.style.color = "black";
    }

}

function submitCalcData() {
    let submitButton = document.getElementById("submit_calc_data");
    submitButton.addEventListener('click', displayBmiResult);
}

submitCalcData();
