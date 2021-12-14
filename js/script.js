// display result
let displayBox = document.querySelector(".display");

// access for Number and Mathematical Operators
let NumberAndMath = document.querySelectorAll(".show-display");
NumberAndMath.forEach(item => {
    item.addEventListener("click", show)
})

// accss calculate class
let calculate = document.querySelector(".calculate").addEventListener("click", calculateFn)

// access clear all item for display
let allClear = document.querySelector(".all-clear").addEventListener("click", allclearFn)

// access clear last item for display
let clearLast = document.querySelector(".clear-last").addEventListener("click", clearLastFn)


// EventListener for Number and Mathematical Operators
function show(e) {
    let input = e.target.innerHTML;
    if (displayBox.innerHTML == 0) {
        displayBox.innerHTML = input;
    }else{
        displayBox.innerHTML += input;
    }
}

// EventListener for calculate class
function calculateFn(e) {
    displayBox.innerHTML = eval(displayBox.innerHTML)
}

// EventListener for clear all item for display
function allclearFn(e) {
    displayBox.innerHTML = 0
}

// EventListener clear last item for display
function clearLastFn(e) {
    if (displayBox.innerHTML.length == 1) {
        displayBox.innerHTML = 0
    }else{
        displayBox.innerHTML = displayBox.innerHTML.substring(0, displayBox.innerHTML.length -1)
    }
}