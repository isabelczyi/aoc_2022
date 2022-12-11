const input = `Monkey 0:
  Starting items: 98, 97, 98, 55, 56, 72
  Operation: new = old * 13
  Test: divisible by 11
    If true: throw to monkey 4
    If false: throw to monkey 7

Monkey 1:
  Starting items: 73, 99, 55, 54, 88, 50, 55
  Operation: new = old + 4
  Test: divisible by 17
    If true: throw to monkey 2
    If false: throw to monkey 6

Monkey 2:
  Starting items: 67, 98
  Operation: new = old * 11
  Test: divisible by 5
    If true: throw to monkey 6
    If false: throw to monkey 5

Monkey 3:
  Starting items: 82, 91, 92, 53, 99
  Operation: new = old + 8
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 2

Monkey 4:
  Starting items: 52, 62, 94, 96, 52, 87, 53, 60
  Operation: new = old * old
  Test: divisible by 19
    If true: throw to monkey 3
    If false: throw to monkey 1

Monkey 5:
  Starting items: 94, 80, 84, 79
  Operation: new = old + 5
  Test: divisible by 2
    If true: throw to monkey 7
    If false: throw to monkey 0

Monkey 6:
  Starting items: 89
  Operation: new = old + 1
  Test: divisible by 3
    If true: throw to monkey 0
    If false: throw to monkey 5

Monkey 7:
  Starting items: 70, 59, 63
  Operation: new = old + 3
  Test: divisible by 7
    If true: throw to monkey 4
    If false: throw to monkey 3`

const monkeyThings = [[98, 97, 98, 55, 56, 72], [73, 99, 55, 54, 88, 50, 55], [67, 98], [82, 91, 92, 53, 99], [52, 62, 94, 96, 52, 87, 53, 60], [94, 80, 84, 79], [89], [70, 59, 63]];
const monkeyInspectionCount = [
0,0,0,0,0,0,0,0
]
const monkeyTest = (monkey, item) => {
 switch (monkey) {
  case 0:
    let worryLevel0 = item * 13;
    worryLevel0 = Math.floor(worryLevel0/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel0%11 === 0 ) {
      monkeyThings[4].push(worryLevel0);
    } else {
      monkeyThings[7].push(worryLevel0);
    }
    break;
  case 1:
    let worryLevel1 = item + 4;
    worryLevel1 = Math.floor(worryLevel1/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel1%17 === 0 ) {
      monkeyThings[2].push(worryLevel1);
    } else {
      monkeyThings[6].push(worryLevel1);
    }
    break;
  case 2:
    let worryLevel2 = item * 11;
    worryLevel2 = Math.floor(worryLevel2/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel2%5 === 0 ) {
      monkeyThings[6].push(worryLevel2);
    } else {
      monkeyThings[5].push(worryLevel2);
    }
    break;
  case 3:
    let worryLevel3 = item + 8;
    worryLevel3 = Math.floor(worryLevel3/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel3%13 === 0 ) {
      monkeyThings[1].push(worryLevel3);
    } else {
      monkeyThings[2].push(worryLevel3);
    }
    break;
  case 4:
    let worryLevel4 = item * item;
    worryLevel4 = Math.floor(worryLevel4/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel4%19 === 0 ) {
      monkeyThings[3].push(worryLevel4);
    } else {
      monkeyThings[1].push(worryLevel4);
    }
    break;
  case 5:
    let worryLevel5 = item + 5;
    worryLevel5 = Math.floor(worryLevel5/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel5%2 === 0 ) {
      monkeyThings[7].push(worryLevel5);
    } else {
      monkeyThings[0].push(worryLevel5);
    }
    break;
  case 6:
    let worryLevel6 = item + 1;
    worryLevel6 = Math.floor(worryLevel6/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel6%3 === 0 ) {
      monkeyThings[0].push(worryLevel6);
    } else {
      monkeyThings[5].push(worryLevel6);
    }
    break;
  case 7:
    let worryLevel7 = item + 3;
    worryLevel7 = Math.floor(worryLevel7/3);
    monkeyInspectionCount[monkey] += 1;
    if (worryLevel7%7 === 0 ) {
      monkeyThings[4].push(worryLevel7);
    } else {
      monkeyThings[3].push(worryLevel7);
    }
    break;

  default:
    break;
 }
}
for (let i = 0; i < 20; i++) {
    monkeyThings.forEach((monkeyThing, index) => {
    if (monkeyThing.length > 0) {
      monkeyThing.forEach(thing => {
        monkeyTest(index, thing);
        monkeyThings[index] = [];
      })
    }
  })
}
console.log(Math.max(...monkeyInspectionCount))
// 237
monkeyInspectionCount.pop();
console.log(237 * Math.max(...monkeyInspectionCount));
