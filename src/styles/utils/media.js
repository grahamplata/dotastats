import { css } from "styled-components";

const sizes = {
  monitor: 1600,
  desktop: 1024,
  tablet: 768,
  phone: 580,
  tiny: 340
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
