function getInput(): string {
  return `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
}

enum Thing {
  Three,
  Snow,
}

const things = getInput()
  .split("\n")
  .map((x) => x.split("").map((x) => (x === "." ? Thing.Snow : Thing.Three)));

const colLen = things[0].length;
let threeCount = 0;

things.forEach((thing, i) => {
  if (thing[(i * 3) % colLen] === Thing.Three) threeCount++;
});

console.log(`We hit ${threeCount} threes`);
