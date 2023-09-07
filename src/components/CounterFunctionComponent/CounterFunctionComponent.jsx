import React, { useState} from 'react'

const CounterFunctionComponent = () =>{
    const [countvalue,setCountValue]=useState(0);
    const increament = () =>{
        setCountValue(countvalue + 1)
    }
    const decreament = () =>{
        setCountValue(countvalue - 1)
    }
    return (
        <React.Fragment>
            <button onClick={increament}>+1</button>
            {countvalue}
            <button onClick={decreament}>-1</button>
        </React.Fragment>
      )
}

export default CounterFunctionComponent