import React from 'react';
import { css } from 'react-emotion';

import { colors, breakpoints } from '../../../utils/styles';

const svg = css`
  display: inline-block;
  height: 28px;
`;

const monogram = css`
  margin-right: 10px;
`;

const logotype = css`
  display: none;

  @media (min-width: ${breakpoints.phablet}px) {
    display: inline-block;
  }
`;

export default () => (
  <div className={svg}>
    <Monogram />
    <Logotype />
    <Product />
  </div>
);

const Logotype = () => (
  <svg
    viewBox="0 0 70 28"
    className={css`
      ${svg};
      ${logotype};
    `}
  >
    <g transform="translate(0 5)">
      <path d="M24.9,7 L27.7,7 L27.7,17 L24.9,17 L24.9,15.7 C23.9,17.2 22.6,17.3 21.8,17.3 C18.7,17.3 16.7,14.9 16.7,12 C16.7,9 18.7,6.7 21.6,6.7 C22.4,6.7 23.9,6.8 24.8,8.3 L24.8,7 L24.9,7 Z M19.7,12 C19.7,13.6 20.8,14.8 22.5,14.8 C24.1,14.8 25.3,13.6 25.3,12 C25.3,10.4 24.2,9.2 22.5,9.2 C20.9,9.2 19.7,10.4 19.7,12 Z" />
      <polygon points="33.2 9.4 33.2 17 30.4 17 30.4 9.4 29.3 9.4 29.3 7 30.4 7 30.4 3.6 33.2 3.6 33.2 7 35.1 7 35.1 9.4" />
      <path d="M41.7 9.4C41 8.8 40.4 8.7 40.1 8.7 39.4 8.7 39 9 39 9.5 39 9.8 39.1 10.1 39.9 10.4L40.6 10.6C41.4 10.9 42.6 11.2 43.1 12 43.4 12.4 43.6 13 43.6 13.7 43.6 14.6 43.3 15.5 42.5 16.2 41.7 16.9 40.7 17.3 39.5 17.3 37.4 17.3 36.3 16.3 35.6 15.6L37.1 13.9C37.7 14.5 38.5 15.1 39.3 15.1 40.1 15.1 40.7 14.7 40.7 14 40.7 13.4 40.2 13.1 39.8 13L39.2 12.8C38.5 12.5 37.7 12.2 37.1 11.6 36.6 11.1 36.3 10.5 36.3 9.7 36.3 8.7 36.8 7.9 37.3 7.4 38.1 6.8 39.1 6.7 39.9 6.7 40.6 6.7 41.8 6.8 43.1 7.8L41.7 9.4zM47.8 8.3C48.8 6.9 50.2 6.7 51 6.7 53.9 6.7 55.9 9 55.9 12 55.9 15 53.9 17.3 50.9 17.3 50.3 17.3 48.8 17.2 47.7 15.7L47.7 17 45 17 45 .2 47.8.2 47.8 8.3zM47.5 12C47.5 13.6 48.6 14.8 50.3 14.8 51.9 14.8 53.1 13.6 53.1 12 53.1 10.4 52 9.2 50.3 9.2 48.6 9.2 47.5 10.4 47.5 12z" />
      <polygon points="60.5 15.5 55.7 7 59 7 62.1 12.7 64.9 7 68.1 7 60.1 22.3 56.9 22.3" />
      <path d="M16,8.7 L13.2,8.7 L9,8.7 L9,11.5 L12.7,11.5 C12.1,13.4 10.7,14.7 8.1,14.7 C5.2,14.7 3.1,12.3 3.1,9.4 C3.1,6.5 5.1,4 8,4 C9.6,4 11.2,4.8 12.2,6.1 L14.5,4.6 C13,2.5 10.6,1.3 8,1.3 C3.6,1.3 0,4.9 0,9.4 C0,13.9 3.4,17.5 8,17.5 C12.6,17.5 16,13.9 16,9.4 C16.1,9.1 16,8.9 16,8.7 Z" />
    </g>
  </svg>
);

const Monogram = () => (
  <svg
    viewBox="0 0 28 28"
    className={css`
      ${svg};
      ${monogram};
    `}
  >
    <path
      fill="#FFF"
      d="M25 14L18 14 18 16 22.8 16C22.1 19 19.9 21.5 17 22.5L5.5 11C6.7 7.5 10.1 5 14 5 17 5 19.7 6.5 21.4 8.8L22.9 7.5C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6L16.5 24.8C21.3 23.6 25 19.2 25 14zM3 14.1C3 16.9 4.1 19.6 6.2 21.7 8.3 23.8 11.1 24.9 13.8 24.9L3 14.1z"
    />
    <path
      fill={colors.brand}
      d="M14,0 C6.3,0 0,6.3 0,14 C0,21.7 6.3,28 14,28 C21.7,28 28,21.7 28,14 C28,6.3 21.7,0 14,0 Z M6.2,21.8 C4.1,19.7 3,16.9 3,14.2 L13.9,25 C11.1,24.9 8.3,23.9 6.2,21.8 Z M16.4,24.7 L3.3,11.6 C4.4,6.7 8.8,3 14,3 C17.7,3 20.9,4.8 22.9,7.5 L21.4,8.8 C19.7,6.5 17,5 14,5 C10.1,5 6.8,7.5 5.5,11 L17,22.5 C19.9,21.5 22.1,19 22.8,16 L18,16 L18,14 L25,14 C25,19.2 21.3,23.6 16.4,24.7 Z"
    />
  </svg>
);

const Product = () => (
  <svg viewBox="0 0 50 28" className={svg}>
    <path
      fill={colors.brand}
      fillRule="evenodd"
      d="M9.856,8.108 L8.292,10.155 C7.395,8.959 6.337,8.844 5.785,8.844 C4.175,8.844 3.669,9.856 3.669,10.638 C3.669,11.006 3.784,11.351 4.152,11.673 C4.52,12.018 5.026,12.202 5.992,12.547 C7.188,12.961 8.315,13.375 9.097,14.088 C9.787,14.709 10.408,15.744 10.408,17.308 C10.408,20.298 8.246,22.345 5.072,22.345 C2.243,22.345 0.587,20.62 -0.218,19.447 L1.737,17.584 C2.473,19.079 3.876,19.631 4.957,19.631 C6.314,19.631 7.326,18.803 7.326,17.515 C7.326,16.963 7.142,16.526 6.728,16.135 C6.153,15.606 5.233,15.307 4.359,15.008 C3.554,14.732 2.588,14.364 1.806,13.674 C1.3,13.237 0.587,12.386 0.587,10.822 C0.587,8.568 2.105,6.314 5.509,6.314 C6.475,6.314 8.292,6.498 9.856,8.108 Z M17.354,14.433 L15.422,14.433 L15.422,22 L12.616,22 L12.616,14.433 L11.512,14.433 L11.512,12.041 L12.616,12.041 L12.616,8.637 L15.422,8.637 L15.422,12.041 L17.354,12.041 L17.354,14.433 Z M24.024,11.719 C25.91,11.719 27.198,12.34 28.049,13.122 C29.038,14.019 29.728,15.399 29.728,17.032 C29.728,18.642 29.038,20.022 28.049,20.919 C27.198,21.701 25.91,22.322 24.024,22.322 C22.138,22.322 20.85,21.701 19.999,20.919 C19.01,20.022 18.32,18.642 18.32,17.032 C18.32,15.399 19.01,14.019 19.999,13.122 C20.85,12.34 22.138,11.719 24.024,11.719 Z M24.024,19.838 C25.657,19.838 26.83,18.55 26.83,17.032 C26.83,15.468 25.634,14.203 24.024,14.203 C22.414,14.203 21.218,15.468 21.218,17.032 C21.218,18.55 22.391,19.838 24.024,19.838 Z M31.39,22 L31.39,12.041 L34.196,12.041 L34.196,13.536 C34.633,12.685 35.231,12.271 35.438,12.156 C35.875,11.88 36.427,11.719 37.094,11.719 C37.577,11.719 37.968,11.834 38.29,11.949 L37.922,14.571 C37.554,14.318 37.186,14.203 36.611,14.203 C36.082,14.203 35.3,14.318 34.748,15.008 C34.219,15.675 34.196,16.526 34.196,17.216 L34.196,22 L31.39,22 Z M46.669,18.803 L49.245,19.217 C48.946,19.953 47.819,22.322 44.346,22.322 C42.736,22.322 41.517,21.862 40.528,20.919 C39.424,19.884 38.964,18.596 38.964,17.032 C38.964,15.054 39.769,13.835 40.482,13.122 C41.655,11.972 43.035,11.719 44.231,11.719 C46.255,11.719 47.428,12.524 48.118,13.352 C49.176,14.617 49.314,16.181 49.314,17.262 L49.314,17.492 L41.862,17.492 C41.862,18.09 42.023,18.734 42.345,19.171 C42.644,19.585 43.265,20.114 44.346,20.114 C45.404,20.114 46.209,19.608 46.669,18.803 Z M41.954,15.698 L46.669,15.698 C46.439,14.341 45.335,13.697 44.3,13.697 C43.265,13.697 42.184,14.364 41.954,15.698 Z"
    />
  </svg>
);
