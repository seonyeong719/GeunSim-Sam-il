export const smoothScroll = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};

export const defaultScroll = () => {
  window.scrollTo(0, 0);
};
