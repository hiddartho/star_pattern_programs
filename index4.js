// right triangle starry pattern

const rightStarryPatter = (numberOfRows) => {
  for (let i = 1; i <= numberOfRows; i++) {
    let str = "";
    for (let j = 0; j < numberOfRows - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += "*";
    }
    console.log(str);
  }
};

rightStarryPatter(4);
