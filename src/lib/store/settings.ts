import { writable, get } from "svelte/store";

export let settings = writable({
  keyboard: {
    value: true,
    label: "Keyboard",
  },
  punctuation: {
    value: false,
    label: "Punctuations",
  },
  capitalLetters: {
    value: false,
    label: "Capital Letters",
  },
  barWhiteSpace: {
    value: true,
    label: "Bar White Space",
  },
  currentKey: {
    value: "a",
    label: "A"
  },
});

export let getSettings = get(settings);
