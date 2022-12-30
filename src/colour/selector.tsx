import { useState, useRef } from 'react';
import Option from './option';
import '../styles.css'

function Selector(): JSX.Element {
    const amount_of_colours = 100
    const indexes = Array.from(Array(amount_of_colours).keys())
    let base = useRef(360 / amount_of_colours)
    const [colour_values, setColourValues] = useState(
        indexes.map(index => index*base.current)
    )

    function updateRange(selected_colour: number): void {
        const low = colour_values[Math.round(selected_colour/2)] || colour_values[0]
        // const high = colour_values[Math.round(selected_colour*2)] || colour_values[-1]
        base.current = base.current/2
        console.log(base.current)
        setColourValues(
            indexes.map(index => low+index*base.current)
        )
    }

    return <div className="container">
        {colour_values.map((colour, index) => {
            return <Option key={`Colour${colour}`} colour={colour} onClick={() => updateRange(index)} />
        })}
    </div>
}

export default Selector