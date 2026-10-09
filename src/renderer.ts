import { ask} from "./backend.js"

const send = document.querySelector("send");
console.log("test");
if (!send) process.exit(1);

send.addEventListener("click", () => {
    console.log("test");
    const message_box = document.querySelector("question");
    if (!message_box) return;

    const question = message_box.textContent;

    const reponse = ask(question);
    const output = document.querySelector("output");

    if (!output) return;

    output.textContent += reponse
})