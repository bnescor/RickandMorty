import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Botonera from './Botonera'
import Card_character from './Card_character'
import Filtrar from './Filtrar'
import axios from 'axios'
import '../Style/character_search.css'
import Loader from './Loader'

const Character_search = () => {
    let{ pages } = useParams()
    let { name } = useParams()
    const [searchdata, setsearchdata] = useState()
    const [Numpages, setNumpages] = useState()
    const [loader, setLoader] = useState(false)
    const [loader_character, setLoader_character] = useState(false)
    const [valor_anterior, setValor_anterior] = useState(1)
    const URL = `https://rickandmortyapi.com/api/character/?page=${pages}&name=${name}`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setsearchdata(res.data)
                setNumpages(res.data.info.pages)
                setLoader_character(true)
                setLoader(true)
            })
            .catch(err => console.log(err))
    }, [name,pages])
    if(pages!=valor_anterior){
        setValor_anterior(pages)
        setLoader_character(false)
      }
    return (
        <article className='search'>
           {loader?
            <>
            <Filtrar/>
            <Botonera
            Numpages={Numpages} />
            <Card_character 
            getdata={searchdata}
            loader_character={loader_character} />
            <Botonera
                Numpages={Numpages}
            />
            </>
            :
            <Loader/>}
        </article>
    )
}

export default Character_search