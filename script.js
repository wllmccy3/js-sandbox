let colorSelector = document.getElementById("colorSelector");
colorSelector.onchange = function () {
    console.log(colorSelector.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelector.value};`;
};

function toggleDarkMode() {
    let content = document.getElementById("content");
    content.classList.toggle("dark-mode");
    //alert("TOGGLE ME, PLEASE")
}

function teleport(distance){
    let runaway = document.getElementById("runaway");
    console.log(runaway.style.top , " - ", runaway.style.left);
    if(runaway.style.top == 0 && runaway.style.left == 0){
        runaway.style.top = `${distance}px`;
    }else if(runaway.style.top == `${distance}px` && runaway.style.left == 0){
        runaway.style.left = `${distance}px`;
    }else if(runaway.style.top == `${distance}px` && runaway.style.left == `${distance}px`){
        runaway.style.top = 0;
    }else if(runaway.style.top == "0px" && runaway.style.left == `${distance}px`){
        runaway.style.top = null;
        runaway.style.left = null;
    }
    runaway.innerText = "...";
}