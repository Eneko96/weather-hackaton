export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const toggleCursor = () =>
document.body.style.cursor === ''
  ? (document.body.style.cursor = 'wait')
  : (document.body.style.cursor = '');