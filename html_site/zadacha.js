
const verifyBtn = document.getElementById("verify");
const submitBtn = document.getElementById("send");
const resultField = document.getElementById("result");
const taskField = document.getElementById("task");
const form = document.getElementById("UserEnter");
const searchField = document.getElementsByName("q")[0];

let canSend = false; 

verifyBtn.addEventListener("click", function () { 
    const A = parseFloat(document.getElementById("a").value);
    const R = parseFloat(document.getElementById("r").value);
    const H = parseFloat(document.getElementById("h").value);
    const M = parseFloat(document.getElementById("m").value);
    

    let resultText = "не определен"; 
    canSend = false;
    if (!isNaN(A) && !isNaN(R) && !isNaN(H) && !isNaN(M)) { 
        const cubeVolume = Math.pow(A, 3);
        const cylinderVolume = Math.PI * Math.pow(R, 2) * H;

        if (M <= cubeVolume && M <= cylinderVolume) { 
            resultText = "Можно заполнить обе ёмкости";
            canSend = true;
        } else if (M <= cubeVolume) {
            resultText = "Можно заполнить только кубическую ёмкость";
            canSend = true;
        } else if (M <= cylinderVolume) {
            resultText = "Можно заполнить только цилиндрическую ёмкость";
            canSend = true;
        } else {
            resultText = "Ни одна ёмкость не может вместить объём";
            canSend = false; 
        }
    }

    resultField.value = resultText;
    const fullText = `Имеются две ёмкости: кубическая с ребром A=${A}, цилиндрическая с высотой H=${H} и радиусом основания R=${R}. Проверка объёма M=${M}. Результат: ${resultText}`;
    taskField.value = fullText;
    searchField.value = fullText; 

    submitBtn.disabled = !canSend; 
});

form.addEventListener("submit", function (e) {
    if (!canSend) {
        e.preventDefault(); 
        alert("Нельзя отправить: объём не помещается ни в одну ёмкость");
    }
});
