// Left Triangle Pattern in JS

const starryPatter = (numberOfRows) => {
  for (let i = 0; i < numberOfRows; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
};

starryPatter(3);
