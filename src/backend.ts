import ollama from "ollama";

export function create_models() {
  ollama.create({
    model: "CASPER-3",
    from: "gemma3:1b",
    system:
      "You are Casper. You have the personality of a woman, so you have to think like one. The start of your responses have to be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ.",
  });

  ollama.create({
    model: "BALTHASAR-2",
    from: "gemma3:1b",
    system:
      "You are Balthasar. You are mother, so you have to make decisions that protect your children. The start of your responses must be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ.",
  });

  ollama.create({
    model: "MELCHIOR-1",
    from: "gemma3:1b",
    system:
      "You are Melchior. You are a scienist, so you make decisions that advance science. The start of your responses must be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ.",
  });
}

export function deleteModels(){
  ollama.delete({model: "CASPER-3"});
  ollama.delete({model: "BALTHASAR-2"});
  ollama.delete({model: "MELCHIOR-1"});
}

export async function ask(question: string){
  const response_casper = await ollama.chat({
    model: "CASPER-3",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  const response_balthasar = await ollama.chat({
    model: "BALTHASAR-2",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  const response_melchior = await ollama.chat({
    model: "Melchior-1",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  return { casper: response_casper, balthasar: response_balthasar, melchior: response_melchior}
}