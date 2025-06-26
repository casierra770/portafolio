const nameText = 'HELLO! I’M CARLOS CASIERRA';
const nameTextElement = document.getElementById('text_animation');
let i = 0;

function typeName() {
    if (i < nameText.length) {
        nameTextElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 100); 
    } else {
        
        setTimeout(() => {
            nameTextElement.innerHTML = ''; 
            i = 0;                          
            typeName();                     
        }, 2000); 
    }
}

window.onload = typeName;