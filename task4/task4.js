console.log("TASK-4");

const formatString = function (string) {
  for (let i = 0; i < string.length; i += 1) {
    const stringLength40 = string.slice(0, 39);
    const points = "...";
    const addPointsWithString = stringLength40.concat(points);

    if (string.length <= 40) {
      return string;
    }

    if (string.length >= 41) {
      return addPointsWithString;
    }
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
