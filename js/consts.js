export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const getLang = () => {
  if (navigator.languages !== undefined) return navigator.languages[0];
  return navigator.language;
};
