const straightLineStarPattern = (numberOfRows) => {
  let str = "";
  for (let i = 0; i < numberOfRows; i++) {
    str += "*";
  }
  console.log(str);
};

// straightLineStarPattern(4);

const spaceInBetweenStars = (numberOfRows) => {
  let str = "";
  str += "*";
  for (let i = 0; i < numberOfRows - 2; i++) {
    str += " ";
  }
  str += "*";
  console.log(str);
};

// spaceInBetweenStars(5);

const wholeHollowSquarePatter = (numberOfRows) => {
  straightLineStarPattern(numberOfRows);
  for (let i = 0; i < numberOfRows; i++) {
    spaceInBetweenStars(numberOfRows);
  }
  straightLineStarPattern(numberOfRows);
};

wholeHollowSquarePatter(8);
