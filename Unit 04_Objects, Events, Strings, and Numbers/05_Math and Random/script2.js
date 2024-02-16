function takeSquareRoot(){
    let number = +document.getElementById("input2").value;

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
}

function takeAbsoluteValue(){
    let number = +document.getElementById("input2").value;

    let absoluteValue = Math.abs(number);
    document.getElementById("result").innerHTML = absoluteValue;
}

function takeRound(){
    let number = +document.getElementById("input2").value;

    let round = Math.round(number);
    document.getElementById("result").innerHTML = round;
}

function takeTangent(){
    let number = +document.getElementById("input2").value;

    let tangent = Math.tanh(number);
    document.getElementById("result").innerHTML = tangent;
}

function takeEuler(){
    let number = +document.getElementById("input2").value;

    let euler = Math.expm1(number);
    document.getElementById("result").innerHTML = euler;
}

// Make another function for takeAbsoluteValue
