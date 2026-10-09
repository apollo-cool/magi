import ollama from "ollama";

export async function check_ollama() {
  try {
    const list = await ollama.list();
    return true
  } catch (error) {
    console.warn(error);
    return false;
  }
}

export async function create_models() {
  await ollama.create({
    model: "CASPER-3",
    from: "gemma3:1b",
    system:
      "You are Casper. You have the personality of a woman, so you have to think like one. The start of your responses have to be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ. No emojis",
  });

  await ollama.create({
    model: "BALTHASAR-2",
    from: "gemma3:1b",
    system:
      "You are Balthasar. You are mother, so you have to make decisions that protect your children. The start of your responses must be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ. No emojis",
  });

  await ollama.create({
    model: "MELCHIOR-1",
    from: "gemma3:1b",
    system:
      "You are Melchior. You are a scienist, so you make decisions that advance science. The start of your responses must be yes or no. Make sure to write a formal explanation. No markdown formatting. You are one of 3 supercomputer AIs who make up the Magi in Nerv HQ. No emojis",
  });
}

export async function delete_models() {
  await ollama.delete({ model: "CASPER-3" });
  await ollama.delete({ model: "BALTHASAR-2" });
  await ollama.delete({ model: "MELCHIOR-1" });
}

export async function ask(question: string) {
  console.log(question);
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
    model: "MELCHIOR-1",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  return {
    casper: response_casper.message.content,
    balthasar: response_balthasar.message.content,
    melchior: response_melchior.message.content,
  };
}
