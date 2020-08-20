const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const breakpoints = {
  //Max Width
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,


  //Min Width
  mobileSmin: `(min-width: ${size.mobileS})`,
  mobileMmin: `(min-width: ${size.mobileM})`,
  mobileLmin: `(min-width: ${size.mobileL})`,
  tabletmin: `(min-width: ${size.tablet})`,
  laptopmin: `(min-width: ${size.laptop})`,
  laptopLmin: `(min-width: ${size.laptopL})`,
  desktopmin: `(min-width: ${size.desktop})`,
  desktopLmin: `(min-width: ${size.desktop})`
};
