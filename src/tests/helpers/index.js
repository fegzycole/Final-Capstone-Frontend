export const vespas = [
  {
    name: 'First Vespa',
    description: 'First Vespa',
    date: 'Fri, 26 Jun 2020 20:00:00',
  },
];

export const appointments = vespas.map(vespa => ({
  name: vespa.name,
  description: vespa.description,
  date: vespa.date,
  city: 'Kinshasha',
}));
