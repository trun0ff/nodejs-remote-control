import {Button, down, left, mouse, Point, right, screen, straightTo, up} from "@nut-tree/nut-js";

const circle = async (radius: number) => {
    if (await checkRadius(radius)) {
        let {x, y} = await mouse.getPosition();
        let steps = 2 * Math.PI * radius;
        let centerX = x + radius;

        for (let i = 0; i < steps; i++) {
            await mouse.move(straightTo(new Point(
                (centerX + radius * Math.cos(2 * Math.PI * i / steps)),
                (y + radius * Math.sin(2 * Math.PI * i / steps))
            )));
            if(i === 0) {
                await mouse.pressButton(Button.LEFT)
            }
        }
        await mouse.releaseButton(Button.LEFT);
    }
};

const square = async (size: number) => {
    if (await checkSquareSize(size)) {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(size));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(up(size));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(left(size));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(down(size));
        await mouse.releaseButton(Button.LEFT);
    }
};

const rectangle = async (width: number, height: number) => {
    if (await checkRectSize(width, height)) {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(height));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(up(width));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(left(height));
        await mouse.releaseButton(Button.LEFT);
        await mouse.pressButton(Button.LEFT);
        await mouse.move(down(width));
        await mouse.releaseButton(Button.LEFT);
    }
};



async function checkRadius(value: number): Promise<boolean> {
    const screedWidth = await screen.width() - 1;
    const screenHeight = await screen.height();
    let {x, y} = await mouse.getPosition();
    if (x + (2 * value) > screedWidth
        || y + value < 0
        || y - value > screenHeight) {
        console.log('Your circle goes out of screen borders')
        return false;
    }
    return true;
}

async function checkSquareSize(value: number): Promise<boolean> {
    const screedWidth = await screen.width() - 1;
    const screenHeight = await screen.height();
    let {x, y} = await mouse.getPosition();
    if (x + value > screedWidth
        || y - value > screenHeight) {
        console.log('Your square goes out of screen borders')
        return false;
    }
    return true;
}

async function checkRectSize(width: number, height: number): Promise<boolean> {
    const screedWidth = await screen.width() - 1;
    const screenHeight = await screen.height();
    let {x, y} = await mouse.getPosition();
    if (x + width > screedWidth
        || y - height > screenHeight) {
        console.log('Your square goes out of screen borders')
        return false;
    }
    return true;
}

export {circle, square, rectangle};