use std::str::FromStr;
use anyhow::{Error, Result, anyhow, Context};

fn get_input() -> &'static str {
    return "0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2";
}
#[derive(Debug)]
struct Line {
    p1: Point,
    p2: Point
}
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32
}

impl FromStr for Point {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        let result = s.split_once(",");
        if result.is_none() {
            return Err(anyhow!("Expect a point to contains a comma"))
        }

        let (x, y) = result.unwrap();
        let x = str::parse::<i32>(x).context("X coordinate should be a number")?;
        let y = str::parse::<i32>(y).context("X coordinate should be a number")?;

        return Ok(Point { x, y })
        
    }
}

impl FromStr for Line {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        let result = s.split_once(" -> ");

        if result.is_none() {
            return Err(anyhow!("Expect a line to contains a delimiter ->"))
        }

        let (p1, p2) = result.unwrap();

        let p1: Point = str::parse(p1)?;
        let p2: Point = str::parse(p2)?; 

        return Ok(Line { p1, p2 })
    }
}

impl Line {
    pub fn is_h_or_v(&self) -> bool {
        self.p1.x == self.p2.x || self.p1.y == self.p2.y
    }
}

fn main() {
    let lines = get_input()
        .lines()
        .flat_map(str::parse)
        .filter(|x: &Line| x.is_h_or_v())
        .collect::<Vec<Line>>();

    println!("Lines w/values are {:?}", lines)
}
