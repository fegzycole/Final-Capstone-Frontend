export const vespas = [
  {
    id: 0,
    name: 'First Vespa',
    description: 'First Vespa',
    date: 'Fri, 26 Jun 2020 20:00:00',
  },
  {
    id: 1,
    name: 'Second Vespa',
    description: 'Second Vespa',
    date: 'Thur, 25 Jun 2020 20:00:00',
  },
];

export const appointments = vespas.map(vespa => ({
  name: vespa.name,
  description: vespa.description,
  date: vespa.date,
  city: 'Kinshasha',
}));

export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

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
