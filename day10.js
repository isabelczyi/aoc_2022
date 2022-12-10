const input = `addx 1
addx 4
noop
noop
addx 30
addx -24
addx -1
noop
addx 4
addx 1
addx 5
addx -4
addx 5
addx 4
addx 1
noop
addx 5
addx -1
addx 5
addx 3
noop
addx -38
addx 9
addx -4
noop
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx -17
addx 22
addx -2
addx 5
addx 2
addx 3
addx -2
addx -36
noop
addx 5
noop
addx 3
noop
addx 2
addx -5
noop
addx 10
addx 3
addx -2
addx 3
addx 2
addx 4
noop
noop
noop
noop
addx 3
noop
noop
addx 7
addx 1
noop
noop
addx -38
addx 39
addx -32
noop
noop
noop
addx 5
addx 2
addx -1
addx 4
noop
addx 5
addx -2
addx 5
addx 2
addx -26
addx 31
addx -2
addx 4
addx 3
addx -18
addx 19
addx -38
addx 7
noop
noop
addx 34
addx -39
addx 8
addx 5
addx 2
addx 10
addx -5
addx -2
addx 5
addx 2
addx 11
addx -6
noop
addx 3
noop
addx 2
addx 3
addx -2
addx -38
noop
noop
noop
addx 5
addx 11
noop
addx -3
noop
noop
noop
addx 2
noop
addx -11
addx 16
noop
addx 3
addx 2
addx 8
noop
noop
noop
noop
noop
addx 4
addx 3
noop
addx -20
noop`

let cycle = [1];
const inputByLine = input.split(/\n/);
const inputArray = inputByLine.map(line => line.split(' '));
inputArray.forEach((instruction, index) => {
  if ((index === 0 && instruction.includes('addx')) ||
    (inputArray[index - 1].includes('noop') && instruction.includes('addx'))
  ) {
    cycle.push(cycle.at(-1), cycle.at(-1), cycle.at(-1) + Number(instruction[1]));
    return;
  }

  if (inputArray[index - 1].includes('noop') && instruction.includes('noop')) {
    cycle.push(cycle.at(-1));
    return;
  }

  if (inputArray[index - 1].includes('addx') && instruction.includes('noop')) {
    return;
  }

  if (inputArray[index - 1].includes('addx') && instruction.includes('addx')) {
        cycle.push(cycle.at(-1), cycle.at(-1) + Number(instruction[1]));
    return;
  }
})

// console.log((Number(cycle[20]) * 20) +  (Number(cycle[60]) * 60) + (Number(cycle[100]) * 100) + (Number(cycle[140]) * 140) + (Number(cycle[180]) * 180) + (Number(cycle[220]) * 220))

// part two
cycle.shift()
console.log(cycle)
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
const cycleSplit = sliceIntoChunks(cycle, 40);;

const CRTcycleOne = cycleSplit[0].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleOne)

const CRTcycleTwo = cycleSplit[1].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleTwo)

const CRTcycleThree = cycleSplit[2].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleThree)

const CRTcycleFour = cycleSplit[3].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleFour)

const CRTcycleFive = cycleSplit[4].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleFive)

const CRTcycleSix = cycleSplit[5].map((position, index) => {

  if (Math.abs(Number(position) - index) < 2) {
    return '#'
  } else {
    return '.'
  }
});
console.log(CRTcycleSix)


console.log(CRTcycleOne.join())
console.log(CRTcycleTwo.join())
console.log(CRTcycleThree.join())
console.log(CRTcycleFour.join())
console.log(CRTcycleFive.join())
console.log(CRTcycleSix.join())
