export const setPageScroll = (scroll = true) => {
  const body = document.querySelector("body");

  if (!body) {
    return;
  }

  const noScrollClass = "no-scroll";
  return scroll
    ? body.classList.remove(noScrollClass)
    : body.classList.add(noScrollClass);
};
