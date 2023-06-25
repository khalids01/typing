
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
