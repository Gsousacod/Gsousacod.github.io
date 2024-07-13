// document.addEventListener('mousemove', function(e) {
//     const follower = document.getElementById('follower');
//     const homeSection = document.getElementById('home');
    
//     // Verifica se o cursor está dentro da seção #home
//     const rect = homeSection.getBoundingClientRect();
//     if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         follower.style.left = `${x}px`;
//         follower.style.top = `${y}px`;
//     } else {
//         follower.style.left = `-9999px`; // Move o follower para fora da tela se o cursor não estiver na seção #home
//     }
// });









// ==============================Terminal===================================
const output = document.getElementById('output');
const input = document.getElementById('input');

const messages = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

let messageIndex = 0;
let cursorVisible = true;

function toggleCursor() {
    const cursor = output.querySelector('.cursor');
    if (cursor) {
        cursor.style.display = cursorVisible ? 'inline' : 'none';
    }
    cursorVisible = !cursorVisible;
}

function typeMessage(message) {
    let index = 0;
    const typingSpeed = 100; // Tempo em milissegundos entre cada letra

    output.innerHTML += `<span class="prompt">gabriel/sobre_mim:~$</span> `;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|'; // O cursor
    output.appendChild(cursor);

    const typingInterval = setInterval(() => {
        if (index < message.length) {
            output.insertBefore(document.createTextNode(message.charAt(index)), cursor);
            index++;
            output.scrollTop = output.scrollHeight; 
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                cursor.remove(); // Remove o cursor após a mensagem
                output.innerHTML += '\n'; // Adiciona uma nova linha após a mensagem
            }, 100); // Pequena pausa antes de remover o cursor
        }
    }, typingSpeed);

    setInterval(toggleCursor, 500); 
}

function startTypingMessages() {
    if (messageIndex < messages.length) {
        typeMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(startTypingMessages, messages[messageIndex - 1].length * 100 + 2000); // Espera com base no comprimento da mensagem
    } else {
        setTimeout(() => {
            output.innerHTML = ''; // Limpa a saída
            messageIndex = 0; // Reinicia o índice de mensagens
            startTypingMessages(); // Reinicia a digitação
        }, 2000); // Espera 2 segundos antes de reiniciar
    }
}

// Inicia a simulação
startTypingMessages();
