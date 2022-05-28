import { writable } from "svelte/store";

const { subscribe, set } = writable([])

const setCoords = coords => set(coords)

export default {
  subscribe,
  setCoords
}