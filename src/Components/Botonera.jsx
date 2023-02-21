import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Style/botonera.css'

const Botonera = ({ Numpages }) => {
    let { name } = useParams()
    let { pages} = useParams()
    const [Curenpages, setCurenpages] = useState()
    const [IndexFirts, setIndexFirts] = useState(0)
    const [Last, setLast] = useState(7)
    const firsIndex = IndexFirts + 6;
    let pagina = [];
    let siguiente
    let atras
    useEffect(() => {
        setCurenpages(parseInt(pages))
    }, [pages])
    
    if (Curenpages > 1) {
        atras = Curenpages - 1
    }
    if (Curenpages < Numpages) {
        siguiente = Curenpages + 1
    }
    for (let i = 1; i <= Numpages; i++) {
        pagina.push(i) 
    }
    let conteo = pagina.slice(IndexFirts, Last)
    const NextPages = () => {
        if (!(Curenpages === Numpages)) {
            if (Last - 1 === Curenpages) {
                setCurenpages(Curenpages + 1)
                setIndexFirts(IndexFirts + 6)
                setLast(firsIndex + 7)
            } else {
                setCurenpages(Curenpages + 1)
            }
        }
    }
    const BackPages = () => {
        if (!(Curenpages === 1)) {
            if (IndexFirts + 1 === Curenpages) {
                setCurenpages(Curenpages - 1)
                setIndexFirts(IndexFirts - 6);
                setLast(Last - 6)
            } else {
                setCurenpages(Curenpages - 1)
            }
        }
    }
    return (
        <header className='botonera-main'>

            {Curenpages === 1 ? '' :
                <Link className='cuadro' onClick={BackPages} to={name === undefined || name === ' ' ? `/Character/${atras}` : `/Character/search/${atras}/${name}`}>
                    <i className='bx bx-chevron-left'></i>
                </Link>}

            {
                conteo.map((user, index) => {
                    return <Link key={index}
                        className={Curenpages == user ? 'cuadro here' : 'cuadro'}
                        onClick={conteo.length - 1 === index && user < Numpages ? () => {
                            setCurenpages(user)
                            setIndexFirts(IndexFirts + 6);
                            setLast(firsIndex + 7)
                        } :
                            () =>
                                setCurenpages(user)} to={name === undefined || name === ' ' ? `/Character/${user}` : `/Character/search/${user}/${name}`}>
                        {user}
                    </Link>
                })
            }
            {Curenpages === Numpages ? '' :
                <Link className='cuadro' onClick={NextPages} to={name === undefined || name === ' ' ? `/Character/${siguiente}` : `/Character/search/${siguiente}/${name}`}>
                    <i className='bx bx-chevron-right'></i>
                </Link>}

        </header >
    )
}

export default Botonera