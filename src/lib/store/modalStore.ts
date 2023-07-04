import { writable } from "svelte/store";

export const showSettings = writable<boolean>(false);

export const showModal = () => {
  showSettings.set(true);
};

export const hideModal = () => {
  showSettings.set(false);
};
