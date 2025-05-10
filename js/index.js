const nameText = 'HELLO! I AM DANIEL VILLADA';
const nameTextElement = document.getElementById('text_animation');
let i = 0;

function typeName() {
    if (i < nameText.length) {
        nameTextElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 100); // velocidad entre letras
    } else {
        // Esperar 2 segundos, luego reiniciar
        setTimeout(() => {
            nameTextElement.innerHTML = ''; // borrar texto
            i = 0;                          // reiniciar índice
            typeName();                     // empezar de nuevo
        }, 2000); // tiempo de espera antes de reiniciar
    }
}

window.onload = typeName;