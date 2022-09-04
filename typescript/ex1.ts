const getInput = (): string => {
  return `forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;
};

enum Directions {
  FORWARD = "forward",
  BACKWARD = "backward",
  UP = "up",
  DOWN = "down",
}

type Movement = {
  direction: Directions;
  distance: number;
};

type Position = {
  x: number;
  y: number;
};

const parseInput = (input: string): Movement[] => {
  const splitted = input.split("\n");
  return splitted.map((line) => {
    const [direction, distance] = line.trim().split(" ");
    return {
      direction: direction as Directions,
      distance: parseInt(distance),
    };
  });
};

class Submarine {
  private position: Position = { x: 0, y: 0 };

  constructor() {
    this.position = { x: 0, y: 0 };
  }

  public getPosition() {
    return this.position;
  }

  public move(movement: Directions, value: number) {
    switch (movement) {
      case Directions.FORWARD:
        this.position.x = this.position.x + value;
        break;
      case Directions.BACKWARD:
        this.position.x = this.position.x - value;
        break;
      case Directions.UP:
        this.position.y = this.position.y + value;
        break;
      case Directions.DOWN:
        this.position.y = this.position.y - value;
        break;
    }
  }
}

const submarine = new Submarine();

const input = getInput();
const parsed = parseInput(input);

parsed.forEach((movement) => {
  submarine.move(movement.direction, movement.distance);
});

console.log("The final position of the submarine is :");
console.log(submarine.getPosition());
