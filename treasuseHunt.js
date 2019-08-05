function findTreasure(size, startPos, moves) {
  let currPos = startPos;
  moves.forEach(move => {
    console.log(move.heading, move.steps);
     switch (move.heading) {
      case 'n':
        currPos[0] += move.steps;
        break;
      case 's':
        currPos[0] -= move.steps;
        break;
      case 'e':
        currPos[1] += move.steps;
        break;
      case 'w':
        currPos[1] -= move.steps;
        break;
     }
    console.log(currPos);
  });
}


let headings = [
  {heading: 'n', steps: 5},
  {heading: 'e', steps: 3},
  {heading: 's', steps: 2},
  {heading: 'w', steps: 1},
];

findTreasure(10, [2,2], headings);
