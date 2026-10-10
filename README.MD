# EVANGELION MAGI

Directly inspired by the Evangelion Magi. Three local AIs decide on a yes or no answer. One AI has the personality of a mother, one AI has the personality of a scientist, and the last one has the personality of a woman.

  
![Orange text in a black background saying "Magi Terminal." There is an ask a question prompt with an orange textbox and an orange sendbutton. There is a console with an orange outline.](https://github.com/apollo-cool/magi/blob/2391666bb06fbcaeb3e6c81fd41dde289963b15a/docs/demo.jpg)

  

## How it works

This project works by leveraging Ollama's api to create custom "models" in order to immitate the Magi.

  

## Dependencies

- [Ollama](https://ollama.com/download/windows)
- gemma3:1b language model (The project downloads the model open the first time opening)

## Installation

### Method 1: Prebuilt Download
We have a download avaliable for [MacOS](https://github.com/apollo-cool/magi/releases) right here:

### Build your own

Clone into the repo:
```bash
git clone https://github.com/apollo-cool/magi.git
cd magi
```

Install dependencies: 
```bash
npm i
```
Build:
```bash
npm run make
```

