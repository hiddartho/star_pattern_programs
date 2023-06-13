//downward triangle star pattern

const downwardStarPatternTriangle = (n) => {
  for (let j = 0; j < n; j++) {
    let str = "";
    for (let i = 0; i < n - j; i++) {
      str += "*";
    }
    console.log(str);
  }
};

downwardStarPatternTriangle(4);
