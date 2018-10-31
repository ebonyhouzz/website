// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  desktop: '2560px',
  laptop: '1024px',
  laptopL: '1440px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
  tablet: '768px'
};

export const device = {
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileS: `(min-width: ${size.mobileS})`,
  tablet: `(min-width: ${size.tablet})`
};
