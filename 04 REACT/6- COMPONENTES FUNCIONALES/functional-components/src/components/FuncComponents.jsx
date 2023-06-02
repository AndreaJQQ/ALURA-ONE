import { useState } from "react";

function FuncComponent () {
    // const state = useState (100)
    // const value = state[0]
    // const updateValue = state[1]
    const [value, setValue] = useState(0)

    return <div> Funtional Component
         <p>
            <button onClick={ () => setValue(value - 1)}> - </button>
           {value}
            <button onClick={ () => setValue(value + 1)}> + </button>
            </p>
    </div>
}

export default FuncComponent;