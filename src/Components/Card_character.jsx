import React from 'react'
import '../Style/card_character.css'
import { Loader_character } from './Loader_character'

const Card_character = ({ getdata, loader_character }) => {
    return (
        <article className='character-main'>
            {getdata.results?.map((user, index) => (
                <>
                    {loader_character?
                            <div key={index} className={user.species === 'Human' ? 'cards-container humano'
                                : user.species === 'Alien' ? 'cards-container alien'
                                    : 'cards-container desconocido'}>
                                <div className='imagen'>
                                    <img src={user.image} alt="" />
                                </div>
                                <div className='descripcion'>
                                    <div className='identificador'>
                                        <h3>{user.name}</h3>
                                        <div className='estado'>
                                            <i className={
                                                user.status === 'Alive' ? 'bx bxs-circle alive'
                                                    : user.status === 'Dead' ? 'bx bxs-circle dead'
                                                        : 'bx bxs-circle unknown'}
                                            ></i>
                                            <h4>{`${user.status} - ${user.species}`}</h4>
                                        </div>
                                    </div>
                                    <div className='activo'>
                                        <div className='activo__div-1'>
                                            <p>Last known location:</p>
                                            <p><b>{user.location.name}</b></p>
                                        </div>
                                        <div className='activo__div-1'>
                                            <p>First seen in:</p>
                                            <p><b>{user.origin.name}</b></p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        :
                            <div key={index} className='cards-container carga'>
                                <Loader_character />
                            </div>
                    }
                </>

            )
            )

            }
        </article>
    )
}

export default Card_character