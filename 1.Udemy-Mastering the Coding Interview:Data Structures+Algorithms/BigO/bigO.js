const nemo = ["nemo"];
const everyone = [
  "bruce",
  "dory",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo");

function findnemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "nemo") {
      console.log("Found Nemo");
    }
    break;
  }

  let t1 = performance.now();
  console.log("call to find nemo took :" + (t1 - t0) + "milliseconds");
}

findnemo(large); // O(n) -->Linear Time

//--------------------------------------------------------------------------------------------------------------------

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logFirstBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstBoxes(boxes); // O(2) =>O(1)-Constant Time

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo2!");
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("Found Nemo3!");
    }
  }
};

findNemo2(everyone); // O(
findNemo3(everyone); //)
