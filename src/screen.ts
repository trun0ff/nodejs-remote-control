import Jimp from "jimp";
import {mouse, Region, screen} from "@nut-tree/nut-js";

const getScreen = async () => {
    let {x, y} = await mouse.getPosition();
    const piece = await screen.grabRegion(new Region(x - 100, y - 100, 200, 200));
    const image = new Jimp(piece.width, piece.height);
    let red: number;
    let green: number;
    let blue: number;
    piece.data.forEach((byte: number, i: number) => {
        const mod = i % 4;
        if (mod === 0) {
            blue = byte;
            return;
        }

        if (mod === 1) {
            green = byte;
            return;
        }

        if (mod === 2) {
            red = byte;
        return;
    }

    image.bitmap.data[i - 3] = red;
    image.bitmap.data[i - 2] = green;
        image.bitmap.data[i - 1] = blue;
        image.bitmap.data[i] = 255;
    });

    const data = await image.getBase64Async(Jimp.MIME_PNG);
    return data.split(",")[1];
};

export {getScreen};