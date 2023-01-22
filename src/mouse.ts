// import * as robot from 'robotjs';
import {mouse, screen, Point, straightTo} from "@nut-tree/nut-js";

const up = async (dy: number) => {
    let {x, y} = await mouse.getPosition();
    y = await prepareDy(y - dy);
    await mouse.move(straightTo(new Point(x, y)));
};

const down = async (dy: number) => {
    let {x, y} = await mouse.getPosition();
    y = await prepareDy(y + dy);
    await mouse.move(straightTo(new Point(x, y)));
};

const left = async (dx: number) => {
    let {x, y} = await mouse.getPosition();
    x = await prepareDx(x - dx);
    await mouse.move(straightTo(new Point(x, y)));
};

const right = async (dx: number) => {
    let {x, y} = await mouse.getPosition();
    x = await prepareDx(x + dx);
    await mouse.move(straightTo(new Point(x, y)));
};

async function prepareDy(value: number): Promise<number> {
    const height = await screen.height();
    value = value > height ? height : value;
    value = value < 1 ? 1 : value;
    return value;
}

async function prepareDx(value: number): Promise<number> {
    const width = await screen.width() - 1;
    value = value > width ? width : value;
    value = value < 1 ? 1 : value;
    return value;
}

export {
    up, left, down, right
};