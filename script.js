let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result41 = document.getElementById("result41");
let resultTitle = document.querySelector(".result4");

document.addEventListener("keydown", (e) => {
    result1.innerText = e.ctrlKey ? 'Ctrl is pressed' : 'Ctrl is not pressed';
    result2.innerText = e.key;
    result3.innerText = e.code;
    result4.innerText = e.keyCode;

    //великий блок і заголовок
    result41.innerText = e.keyCode;
    resultTitle.innerText = e.keyCode;
});
