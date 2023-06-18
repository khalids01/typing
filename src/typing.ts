import { get, writable } from "svelte/store";

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

let str = "Lorem ipsum";

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

letters.subscribe((currentLetters) => {
  currentLetters.entries();
});

const updateScores = (cLetters: typeof getLetters) => {
  let words = Array.from(cLetters.values()).map((item) => {
    if (
      item.element.length > 2 &&
      item.element != " " &&
      String(item.element).trim()
    ) {
      return item;
    }
  }).length;

  let currentTotalLetters = Array.from(cLetters.values()).map(
    (item) => item.element
  );

  scores.update((currentScore) => {
    let newScore = currentScore;
    let t = get(timer);
    let tInSec = t.end - t.start;
    newScore.errors = `${errors.length} letters`;
    newScore.speed = `${((words * 60) / tInSec).toFixed(1)} wpm`;
    newScore.accuracy = `${(
      (rights.length / currentTotalLetters.length) *
      100
    ).toFixed(1)}%`;

    return newScore;
  });

  setStrMap(str);
};

export const typingDone = () => {
  let currentLetters = get(letters);
  Array.from(currentLetters.values()).forEach((item) => {
    if (item.status.includes("wrong")) {
      errors.push(item);
    }
  });

  Array.from(currentLetters.values()).forEach((item) => {
    if (item.status.includes("right")) {
      rights.push(item);
    }
  });

  updateScores(getLetters);
  errors = [];
  rights = [];
};

export const getItem = (index: number) => {
  return get(letters).get(index);
};

export const getLetters = get(letters);
export const getScores = get(scores);
