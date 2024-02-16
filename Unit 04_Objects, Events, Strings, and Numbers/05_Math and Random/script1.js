function takeSquareRoot(){
    let number = +document.getElementById("input1").value;

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
}

function takeAbsoluteValue(){
    let number = +document.getElementById("input1").value;

    let absoluteValue = Math.abs(number);
    document.getElementById("result").innerHTML = absoluteValue;
}

// Make another function for takeAbsoluteValue
