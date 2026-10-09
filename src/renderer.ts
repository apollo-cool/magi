
const send_button = document.getElementById("send");
const output_text = document.getElementById("output");
const input = document.querySelector("#question");

const install_ollama = document.getElementById("install_ollama");
console.log(install_ollama);

let rebound = false

send_button?.addEventListener("click", async () => {
    if (rebound) return;
    rebound = true;

    if (!input) {
        console.error("Element with id 'question' can't be found");
        rebound = false;
        return;
    }
    if (!output_text) {
        console.error("Element with id 'output' can't be found");
        rebound = false;
        return;
    }

    const question = input.value
    output_text.textContent += 
    `
    CASPER-3 is thinking
    BALTHASAR-2 is thinking
    MELCHIOR-1 is thinking

    `;

    output_text.scrollTop = output_text.scrollHeight;

    const response: MagiResponse = await window.backend.ask(question);

    output_text.textContent += 
    `
    CASPER-3: ${response.casper}

    BALTHASAR-2: ${response.balthasar}

    MELCHIOR-1: ${response.melchior}
    
    `;
    output_text.scrollTop = output_text.scrollHeight;
    rebound = false;
});


install_ollama?.addEventListener("click", () => {
    window.backend.open_url("https://ollama.com/download");
});