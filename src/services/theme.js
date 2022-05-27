import { writable } from "svelte/store";

const { subscribe, set } = writable('default');

const changeTheme = (theme) => {
  document.documentElement.className = theme;
  set(theme);
}

export default {
  subscribe,
  changeTheme
}