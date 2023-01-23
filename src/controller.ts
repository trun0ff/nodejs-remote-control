import {down, left, right, up} from "./mouse";
import { mouse } from "@nut-tree/nut-js";
import {Readable} from "stream";
import {circle, rectangle, square} from "./draw";
import {getScreen} from "./screen";

const MOUSE_UP_ACTION = 'mouse_up';
const MOUSE_DOWN_ACTION = 'mouse_down';
const MOUSE_LEFT_ACTION = 'mouse_left';
const MOUSE_RIGHT_ACTION = 'mouse_right';
const MOUSE_POSITION_ACTION = 'mouse_position';

const DRAW_CIRCLE_ACTION = 'draw_circle';
const DRAW_RECTANGLE_ACTION = 'draw_rectangle';
const DRAW_SQUARE_ACTION = 'draw_square';

const PRINT_SCREEN_ACTION = 'prnt_scrn';

const __handleAction = async (request: Buffer, readableWsStream:Readable) => {
    const dataArray = request.toString().split(' ');
    const action = dataArray[0];
    const value = parseInt(dataArray[1]);
    const value2 = parseInt(dataArray[2]);

    switch (action) {
        case MOUSE_UP_ACTION:
            await up(value);
            readableWsStream.push(action);
            break;
        case MOUSE_DOWN_ACTION:
            await down(value);
            readableWsStream.push(action);
            break;
        case MOUSE_LEFT_ACTION:
            await left(value);
            readableWsStream.push(action);
            break;
        case MOUSE_RIGHT_ACTION:
            await right(value);
            readableWsStream.push(action);
            break;
        case MOUSE_POSITION_ACTION:
            let { x, y } = await mouse.getPosition();
            readableWsStream.push(`mouse_position {${x},${y}}`);
            break;
        case DRAW_CIRCLE_ACTION:
            await circle(value);
            break;
        case DRAW_RECTANGLE_ACTION:
            await rectangle(value, value2);
            break;
        case DRAW_SQUARE_ACTION:
            await square(value);
            break;
        case PRINT_SCREEN_ACTION:
            let image = await getScreen();
            if (image) {
                readableWsStream.push(`prnt_scrn ${image}\0`);
            }
            break;
        default:
            console.log('Action not found');
    }
};

export {__handleAction};