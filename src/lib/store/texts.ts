import { get, writable, readable } from "svelte/store";

const storiesData = [
  "first lorem ipsum dolor sit amet it is a dummy text for practice",
  "second lorem ipsum dolor sit amet it is a dummy text for practice",
  "third lorem ipsum dolor sit amet it is a dummy text for practice",
  "fourth lorem ipsum dolor sit amet it is a dummy text for practice",
  "fifth lorem ipsum dolor sit amet it is a dummy text for practice",
];

const stories = readable(storiesData);

export function getNextStory(currentIndex: number): (typeof storiesData)[0] {
  const totalStories = storiesData.length;
  const nextIndex = (currentIndex + 1) % totalStories;
  return storiesData[nextIndex];
}


export const allStories = get(stories);
