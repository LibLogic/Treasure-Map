function findTreasure(size, currPos, moves, traps) {
  moves.forEach(move => {
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

  currPos[0] < 0 ? currPos[0] = (size - Math.abs(currPos[0]) % size)
  : currPos[0] = currPos[0] % size;

  currPos[1] < 0 ? currPos[1] = (size - Math.abs(currPos[1]) % size)
  : currPos[1] = currPos[1] % size;

  traps.forEach(trap => {
    trap = JSON.stringify(trap);
    let currPosStr = JSON.stringify(currPos);
    if (currPosStr === trap) {
      currPos = "BOOM! you landed on a trap \nat position " + JSON.parse(currPosStr);
    }
  });

  });



  return currPos;
}

let headings = [
  {heading: 'n', steps: 5},
  {heading: 'e', steps: 3},
  {heading: 'w', steps: 2},
  {heading: 's', steps: 3}
];

let traps = [
  [2, 3],
  [1, 4],
  [5, 6],
  [7, 3]
];

console.log(
  findTreasure(10, [2,2], headings, traps)
);