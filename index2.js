// Square Star Pattern by using JS

const squareStarPatter = (numberOfRows) => {
  for (let i = 0; i < numberOfRows; i++) {
    let str = "";
    for (let j = 0; j < numberOfRows; j++) {
      str += "*";
    }
    console.log(str);
  }
};

squareStarPatter(4);
