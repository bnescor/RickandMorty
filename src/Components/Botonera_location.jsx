import React from 'react'
import { useState,useEffect } from 'react'
import '../Style/botonera_location.css'

const Botonera_location = ({ Numpages, setIndexfirts, setIndexlast, indexlast }) => {
    const pages = indexlast / 12
    const [Curenpages, setCurenpages] = useState()
    const [IndexFirts, setIndexFirts] = useState(0)
    const [Last, setLast] = useState(7)
    const firsIndex = IndexFirts + 6;
    let pagina = [];
    let siguiente
    let atras
    useEffect(() => {
        setCurenpages(pages)
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

    const NextPages = () => {
        if (!(Curenpages === Numpages)) {
            if (Last - 1 === Curenpages) {
                setCurenpages(Curenpages + 1)
                setIndexFirts(IndexFirts + 6)
                setLast(firsIndex + 7)
            } else {
                setCurenpages(Curenpages + 1)
                updateplus()

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
                updateback()
            }
        }
    }
    let conteo = pagina.slice(IndexFirts, Last)
    const updateplus = () => {
        setIndexlast(12 * (Curenpages + 1))
        setIndexfirts((12 * (Curenpages + 1)) - 12)
    }
    const updateback = () => {
        setIndexlast(12 * (Curenpages - 1))
        setIndexfirts((12 * (Curenpages - 1)) - 12)
    }
    const update = (pages) => {
        setIndexlast(12 * pages)
        setIndexfirts((12 * pages) - 12)
    }
    return (
        <article className='botonera-main'>
            {Curenpages === 1 ? '' :
                <button className='cuadro' onClick={BackPages}>
                    <i className='bx bx-chevron-left'></i>
                </button>}

            {
                conteo.map((user, index) => {
                    return <button key={index}
                        className={Curenpages === user ? 'cuadro here' : 'cuadro'}
                        onClick={conteo.length - 1 === index && user < Numpages ? () => {
                            setCurenpages(user)
                            setIndexFirts(IndexFirts + 6);
                            setLast(firsIndex + 7)
                        } :
                            () => {
                                setCurenpages(user)
                                update(user)
                            }
                        }>
                        {user}
                    </button>
                })
            }
            {Curenpages === Numpages ? '' :
                <button className='cuadro' onClick={NextPages}>
                    <i className='bx bx-chevron-right'></i>
                </button>}
        </article>
    )
}

export default Botonera_location