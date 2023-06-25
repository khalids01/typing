import { writable, get } from "svelte/store";

let settings = writable({
    keyboard: true,
    punctuation: false,
    capitalLetters: false,
    barWhiteSpace: true,
    currentKey: 'A',
    
})