import { get, writable, derived } from "svelte/store";
import { settings } from "./settings";
import { allText, keysArr } from "$lib/store/data";

let errors: any[] = [];
let rights: any[] = [];
let total: any[] = [];
let text = "";
let textMap = new Map();
export let scores = writable({
  speed: "0",
  accuracy: "0",
  errors: "0",
});

export let timer = writable({
  start: 0,
  end: 1,
});

export const letters = writable<LetterElements>(textMap);
let activeIndex = writable(0);

export const startTimer = () => {
  const date = new Date();
  timer.update((cT) => {
    let newTimer = cT;
    newTimer.start = date.getTime() / 1000;
    return newTimer;
  });
};

export const endTimer = () => {
  const date = new Date();
  timer.update((cT) => {
    let newTimer = cT;
    newTimer.end = date.getTime() / 1000;
    return newTimer;
  });
};

export const resetTimer = () => {
  timer.update((cT) => {
    let newTimer = cT;
    newTimer.end = 1;
    newTimer.start = 0;
    return newTimer;
  });
};


settings.subscribe((newSettings) => {
  let activeKeyIndex = keysArr.findIndex(
    (item) => item === newSettings.current_key
  );

  if (newSettings.text_type === "practice") {
    text = allText.getShortMeaningfulText(keysArr[activeKeyIndex], {
      size: newSettings.text_length,
      punctuation: newSettings.punctuation,
      capitalLetters: newSettings.capital_letters,
    });
  } else if (newSettings.text_type === "strict-practice") {
    text = allText.getShortPracticeText(keysArr[activeKeyIndex], {
      size: newSettings.text_length,
      punctuation: newSettings.punctuation,
      capitalLetters: newSettings.capital_letters,
    });
  } else {
    text = allText.getQuot(get(activeIndex));
  }

  if (!newSettings.punctuation) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    text = text.replaceAll(punctuationRegex, "");
  }

  if (!newSettings.capital_letters) {
    text = text.toLowerCase();
  }
  setTextMap(text);
});

Array.from(text).forEach((element, index) => {
  textMap.set(index, {
    element,
    status: "not-active",
  });
});

function setTextMap(txt: string) {
  letters.update(() => {
    const newStrMap = new Map();
    Array.from(txt).forEach((element, index) => {
      newStrMap.set(index, {
        element,
        status: "not-active",
      });
    });
    newStrMap.set(0, { element: newStrMap.get(0).element, status: "active" });
    return newStrMap;
  });
}

export const updateStatus = ({
  index,
  status,
}: {
  index: number;
  status: LetterStatus;
}) => {
  letters.update((prevState) => {
    const updatedLetters = new Map(prevState);

    let item = updatedLetters.get(index);

    let element = item?.element || "";

    updatedLetters.set(index, { element, status });

    return updatedLetters;
  });
};

export const resetLetters = () => {
  setTextMap(text);
  resetTimer();
};

const getWords = (s: string) => {
  let words: any[] = [];
  let spacesCount = s.split("").filter((s) => s === " ").length;
  let splitWords = s.split(" ");
  splitWords.forEach((word) => {
    if (word.length > 1) {
      words.push(word);
    }
  });

  return words.length + Math.floor(spacesCount / 3);
};

const updateScores = () => {
  let words = getWords(text);

  scores.update((currentScore) => {
    let newScore = currentScore;
    let t = get(timer);
    let tInSec = t.end - t.start;
    newScore.errors = `${errors.length} letters`;
    newScore.speed = `${(words / (tInSec / 60)).toFixed(1)} wpm`;
    newScore.accuracy = `${((rights.length / total.length) * 100).toFixed(1)}%`;

    return newScore;
  });
  settings.update((s) => ({
    ...s,
    current_key: keysArr[get(activeIndex) + 1] as Settings["current_key"],
  }));

  activeIndex.update((index) => index + 1);
  setTextMap(text);
};

export const typingDone = () => {
  let currentLetters = get(letters);
  errors = [];
  rights = [];
  total = [];

  scores.set({
    speed: "0",
    accuracy: "0",
    errors: "0",
  });

  Array.from(currentLetters.values()).forEach((item) => {
    if (item.status.includes("wrong")) {
      errors.push(item);
    }
    if (item.status.includes("right")) {
      rights.push(item);
    }
    total.push(item);
  });

  updateScores();
  errors = [];
  rights = [];
};

export const getItem = (index: number) => {
  return get(letters).get(index);
};

export const getLetters = get(letters);
export const getScores = get(scores);
