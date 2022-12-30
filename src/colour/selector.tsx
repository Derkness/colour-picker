import { useState } from 'react';
import Option from './option';
import '../styles.css'

function Selector(): JSX.Element {
    const base = 360 / 7
    const [colour_values, setColourValues] = useState([0 * base, 1 * base, 2 * base, 3 * base, 4 * base, 5 * base, 6 * base])

    function updateRange(selected_colour: number): void {
        const low = colour_values[selected_colour-1] || colour_values[selected_colour]
        const high = colour_values[selected_colour+1] || colour_values[selected_colour]
        const new_base = (high-low) / 7
        setColourValues([
            low + (0  * new_base),
            low + (1  * new_base),
            low + (2  * new_base),
            low + (3  * new_base),
            low + (4  * new_base),
            low + (5  * new_base),
            low + (6  * new_base)
        ])
    }

    return <div className="container">
        {colour_values.map((colour, index) => {
            return <Option key={`Colour${colour}`} colour={colour} onClick={() => updateRange(index)} />
        })}
    </div>
}

export default Selector