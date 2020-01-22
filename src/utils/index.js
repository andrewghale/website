import github from '../assets/img/github.svg';
import instagram from '../assets/img/instagram.svg';
import linkedin from '../assets/img/linkedin.svg';
import githubWhite from '../assets/img/github-white.svg';
import instagramWhite from '../assets/img/instagram-white.svg';
import linkedinWhite from '../assets/img/linkedin-white.svg';

export const socialLinks = [
  {
    name: 'github',
    img: github,
    src: 'https://github.com/andrewghale',
    className: 'git',
  },
  {
    name: 'instagram',
    img: instagram,
    src: 'https://www.instagram.com/',
    className: 'insta',
  },
  {
    name: 'linkedin',
    img: linkedin,
    src: 'https://www.linkedin.com/in/andrew-hale-74a7ba113/',
    className: 'linkedin',
  }
];
export const socialLinksWhite = [
  {
    name: 'githubWhite',
    img: githubWhite,
    src: 'https://github.com/andrewghale',
    className: 'git',
  },
  {
    name: 'instagramWhite',
    img: instagramWhite,
    src: 'https://www.instagram.com/',
    className: 'insta',
  },
  {
    name: 'linkedinWhite',
    img: linkedinWhite,
    src: 'https://www.linkedin.com/in/andrew-hale-74a7ba113/',
    className: 'linkedin',
  }
];

export const codeStringArray = `
  const divCalculator = (input) => {
      let total = [];
      for (let i = 1; i <= input; i++) {
          if (input % i === 0) {
              total.push(i);
          };
      };
      return total.join(", ");
  }
  // if input is 12,
  // total = [1, 2, 3, 4, 6, 12]

  // if input is 319,
  // total = [1, 11, 29, 319]

`;

export const codeStringPrime = `
  const testPrime = (input) => {
      if ( input === 1 ) {
          return ('false');
      } else if ( input === 2 ) {
          return ('true');
      } else {
          for ( let i = 2; i < input; i++ ) {
              if ( input % i === 0 ) {
                  return ('false');
              }
          }
      return ('true');
  }

`;

export const date = new Date().getFullYear();

export const handleMakeDivisorArray = (props) => {
  let total = [];
  for (let i = 1; i <= props; i++) {
      if (props % i === 0) {
          total.push(i);
      };
  };
  return total.join(", ");
}

export const handleIsPrime = (props) => {
  // eslint-disable-next-line
  if ( props == 0 ) {
    return (null);
  } else if ( props === 1 ) {
      return ('False');
  } else if ( props === 2 ) {
      return ('True');
  } else {
      for ( let i = 2; i < props; i++ ) {
          if ( props % i === 0 ) {
              return ('False');
          }
      }
    return ('True');
  }
}

export const handleMakeDivisorArrayForPairs = (props) => {
  let total = [];
  for (let i = 1; i <= props; i++) {
      if (props % i === 0) {
          total.push(i);
      };
  };
  return total;
}