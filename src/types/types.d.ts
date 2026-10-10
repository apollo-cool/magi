import type { Window } from "electron";

declare global {
  interface Window {
    backend: {
      ask: Function<string>;
      open_url: Function<string>;
      check_ollama: Function;
      ollama_error: Function;
    };
  }

  interface MagiResponse {
    casper: String;
    melchior: String;
    balthasar: String;
  }

  interface Element {
    value: string;
  }
}
