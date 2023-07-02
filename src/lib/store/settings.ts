import { writable, get } from "svelte/store";

export let settings = writable({
  keyboard: true,
  punctuation: false,
  capital_letters: false,
  bar_white_space: true,
  current_key: "A",
});

export let getSettings = get(settings);
