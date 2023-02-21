import React from 'react'
import { Waveform } from '@uiball/loaders'
import '../Style/loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <Waveform 
             size={40}
             lineWeight={3.5}
             speed={1} 
             color="black" 
            />
        </div>
    )
}

export default Loader