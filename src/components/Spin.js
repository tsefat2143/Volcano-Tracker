import React from 'react'
import spinner from './spin.gif'

function Spin() {
    return (
        <div className='spinner'>
            <img src={spinner} alt='Loading'/>
            <h1>Loading Data</h1>
        </div>
    )
}

export default Spin
