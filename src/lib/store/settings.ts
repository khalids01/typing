import { writable, get } from "svelte/store";

export let settings = writable<Settings>({
  keyboard: true,
  punctuation: false,
  capital_letters: false,
  bar_white_space: true,
  current_key: "A",
  font_size: 'lg',
  text_type: "practice",
  text_length: "md",
});

export let getSettings = get(settings);
