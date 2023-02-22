import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Botonera from './Botonera'
import Card_character from './Card_character'
import '../Style/character.css'
import Filtrar from './Filtrar'
import Loader from './Loader'

const Character = () => {
  let { pages } = useParams()
  const [valor_anterior, setValor_anterior] = useState(1)
  const [getdata, setGetdata] = useState()
  const [Numpages, setNumpages] = useState()
  const [loader, setLoader] = useState(false)
  const [loader_character, setLoader_character] = useState(false)
  const URL = `https://rickandmortyapi.com/api/character/?page=${pages}`
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setGetdata(res.data)
        setNumpages(res.data.info.pages)
        setLoader(true)
        setLoader_character(true)
      })
      .catch(err => console.log(err))
  }, [pages])
  if (pages != valor_anterior) {
    setValor_anterior(pages)
    setLoader_character(false)
  }
  return (
    <div className='Character'>
      {loader ?
        <>
          <Filtrar />
          <Botonera
            Numpages={Numpages} />
          <Card_character
            getdata={getdata}
            loader_character={loader_character} />
          <Botonera
            Numpages={Numpages} />
        </>

        :
        <Loader />
      }
    </div>
  )
}

export default Character