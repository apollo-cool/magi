import type { Window } from "electron";

declare global {
  interface Window {
    backend: {
      ask: Function<string>;
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
