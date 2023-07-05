import { get, writable } from "svelte/store";
import { allStories, getNextStory } from "./texts";

let currentStoryIndex = 0;

export let scores = writable({
  speed: "0",
  accuracy: "0",
  errors: "0",
});

export let timer = writable({
  start: 0,
  end: 1,
});
let errors: any[] = [];
let rights: any[] = [];
let total: any[] = [];

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

let str = allStories[currentStoryIndex];

let strMap = new Map();

Array.from(str).forEach((element, index) => {
  strMap.set(index, {
    element,
    status: "not-active",
  });
});

const setStrMap = (text: string) => {
  letters.update(() => {
    const newStrMap = new Map();
    Array.from(text).forEach((element, index) => {
      newStrMap.set(index, {
        element,
        status: "not-active",
      });
    });
    newStrMap.set(0, { element: newStrMap.get(0).element, status: "active" });
    return newStrMap;
  });
};

export const letters = writable<LetterElements>(strMap);

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
  setStrMap(str);
  resetTimer();
};

// letters.subscribe((currentLetters) => {
//   currentLetters.entries();
// });

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
  let words = getWords(str);

  scores.update((currentScore) => {
    let newScore = currentScore;
    let t = get(timer);
    let tInSec = t.end - t.start;
    newScore.errors = `${errors.length} letters`;
    newScore.speed = `${(words / (tInSec / 60)).toFixed(1)} wpm`;
    newScore.accuracy = `${(
      (rights.length / total.length) *
      100
    ).toFixed(1)}%`;

    // console.clear();
    // console.table({
    //   time: tInSec / 60,
    //   speed: `${(words / (tInSec / 60)).toFixed(1)} wpm`,
    // });
    // console.table({
    //   rightsLength: rights.length,
    //   total: total.length,
    // });

    // console.log({ rights });

    return newScore;
  });

  setStrMap(getNextStory(currentStoryIndex));
  currentStoryIndex++;
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
