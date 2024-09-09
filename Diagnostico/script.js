/* Pregunta: ¿Cuál es la función de 'document.getElementById' en JavaScript? */
function checkAnswer() {
    /* Pregunta: ¿Qué hace 'prompt' y cómo se puede usar en lugar de 'alert'? */
    let answer = prompt("Enter your answer:");

    /* Pregunta: ¿Cuál es el propósito de la instrucción 'if' en este fragmento de código? */
    if (answer.toLowerCase() === 'paris') {
        alert("Correct!");
    } else {
        alert("Try again!");
    }
}

/* Pregunta: ¿Cómo se puede manipular el DOM usando JavaScript para cambiar el contenido de un elemento? */
document.getElementById("question").innerText = "What is the capital of Spain?";