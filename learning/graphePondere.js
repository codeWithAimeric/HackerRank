//graphe pondéré
const nodes = ['A', 'B', 'C', 'D', 'E'];
const edges = {
  'A': [{ node: 'B', weight: 2 }, { node: 'C', weight: 5 }],
  'B': [
    { node: 'A', weight: 2 },
    { node: 'C', weight: 6 },
    { node: 'D', weight: 1 },
    { node: 'E', weight: 3 }
  ],
  'C': [
    { node: 'A', weight: 5 },
    { node: 'B', weight: 6 },
    { node: 'D', weight: 2 }
  ],
  'D': [
    { node: 'B', weight: 1 },
    { node: 'C', weight: 2 },
    { node: 'E', weight: 4 }
  ],
  'E': [
    { node: 'B', weight: 3 },
    { node: 'D', weight: 4 }
  ]
};


