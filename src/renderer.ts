
const send_button = document.getElementById("send");
const output_text = document.getElementById("output");
const input = document.querySelector("#question");

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

    console.log(question)
    const response: MagiResponse = await window.backend.ask(question);
    console.log(response);
    output_text.textContent += 
    `
    CASPER-3: ${response.casper}

    BALTHASAR-2: ${response.balthasar}

    MELCHIOR-1: ${response.melchior}
    
    `;
    output_text.scrollTop = output_text.scrollHeight;
    rebound = false;
});
