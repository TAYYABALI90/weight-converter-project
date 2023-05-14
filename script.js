

// let outputDiv = document.querySelector("#output-div").style.visibility = "hidden";

// let input1 = document.querySelector("#input1").addEventListener("input", weightConverter);

// function weightConverter(e) {

//     outputDiv = document.querySelector("#output-div").style.visibility = "visible";

//     let result = e.target.value;

// document.querySelector("#grams-div").innerHTML = result / 0.0022046;

// document.querySelector("#kg-div").innerHTML = result / 2.2046;

//     document.querySelector("#os-div").innerHTML = result * 16;

// }

let outputDiv = document.querySelector("#output-div").style.visibility = "hidden";


function mouseOver() {

    outputDiv = document.querySelector("#output-div").style.visibility = "visible";

}

let input1 = document.querySelector("#input1");

function getResultOne() {

    let result = input1.value;

    document.querySelector("#grams-div").innerHTML = result / 0.0022046;

}

function getResultTwo() {

    let result = input1.value;

    document.querySelector("#kg-div").innerHTML = result / 2.2046;

}

function getResultThree() {

    let result = input1.value;

    document.querySelector("#os-div").innerHTML = result * 16;

}

// let resetBtn = document.querySelector("#resetBtn");

function clearAllInputFields() {

    window.location.reload();

}

// function clearAllInputFields() {
    
//     document.querySelector("#myForm").reset();

//     // document.querySelector("#grams-div").reset();

// }





