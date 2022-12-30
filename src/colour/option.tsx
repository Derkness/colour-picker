//TODO replace with hilbert curve

import { MouseEventHandler } from "react";
import '../styles.css'

const SATURATION = 1
const VALUE = 1

function hsvToRgb(
    h: number,
    s: number,
    v: number
): [number, number, number] {
    let r: number, g: number, b: number;
    h = h / 360;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
        default:
            r = 0;
            g = 0;
            b = 0;
    }

    return [r * 255, g * 255, b * 255];
}


interface Props {
    colour: number
    onClick: MouseEventHandler<HTMLDivElement>
}

function Option({ colour, onClick }: Props): JSX.Element {
    const [r, g, b] = hsvToRgb(colour, SATURATION, VALUE)
    return <div className="box" onClick={onClick} style={{ background: `rgb(${r}, ${g}, ${b})` }} >
        {Math.round(r)}
        <br />
        {Math.round(g)}
        <br />
        {Math.round(b)}
    </div>
}

export default Option