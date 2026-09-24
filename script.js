const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");const direction = document.getElementById("direction");
const colorCode = document.getElementById("color-code");
const colorBox = document.getElementById("color-box");


function backGen(){
    let directionValue = direction.value;
    let colorOneValue = colorOne.value;
    let colorTwoValue = colorTwo.value;

    colorBox.style.background = `linear-gradient(${directionValue}, ${colorOneValue}, ${colorTwoValue})`;
    colorCode.textContent = `linear-gradient(${directionValue}, ${colorOneValue}, ${colorTwoValue});`; 
}


colorOne.addEventListener("input", backGen);
colorTwo.addEventListener("input", backGen);
direction.addEventListener("change", backGen);