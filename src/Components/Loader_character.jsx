import React from 'react'
import { Ring } from '@uiball/loaders'
import '../Style/loader_character.css'

export const Loader_character = () => {
    return (
        <div className='loader_character'>

            <Ring
                size={40}
                lineWeight={5}
                speed={2}
                color="white"
            />
        </div>
    )
}
