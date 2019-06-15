import changeColor from "./utils/changeColor";

const base = "hsla(0, 0%, 0%, 1)";
const background = "hsla(0, 0%, 100%, 1)";
const header = "#282c34";
const linkHover = "hsla(192, 100%, 50%, 1)";

export const Colors = {
  base,
  p: changeColor(base, 0.8),
  border: changeColor(base, 0.15),
  input: changeColor(base, 0.03),
  background,
  header,
  header2: changeColor(base, 0.7),
  header3: changeColor(base, 0.8),
  linkHover,
  link: changeColor(base, 0.35),
  subNav: changeColor(base, 0.2)
};

export const Fonts = {
  basic:
    '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif, Georgia, serif, sans-serif',
  code: "'Source Code Pro', monospace"
};
