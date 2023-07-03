// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

type LetterStatus =
  | "active"
  | "wrong"
  | "right"
  | "not-active"
  | "wrong active";
type LetterElements = Map<number, { element: string; status: LetterStatus }>;
type Info = "speed" | "accuracy" | "errors";

interface Settings {
  keyboard: boolean;
  punctuation: boolean;
  capital_letters: boolean;
  bar_white_space: boolean;
  current_key:
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";
  font_size: "sm" | "md" | "lg" ;
  text_type: "practice" | "quotes";
  text_length: "sm" | "md" | "lg";
}
