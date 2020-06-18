export const sideBarLinks = [
  {
    link: 'https://twitter.com/fergusoniyara',
    className: 'fa fa-twitter twitter',
  },
  {
    link: 'https://github.com/fegzycole',
    className: 'fa fa-github github',
  },
  {
    link: 'https://www.linkedin.com/in/fergusoniyara/',
    className: 'fa fa-linkedin linkedIn',
  },
  {
    link: 'https://www.instagram.com/fegor___/',
    className: 'fa fa-instagram instagram',
  },
];

export const vespaLinks = sideBarLinks.map(({ link, className }) => ({
  link,
  className: `${className} rounded`,
}));

export const parseJwt = token => {
  const base64Payload = token.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  return JSON.parse(payload);
};
