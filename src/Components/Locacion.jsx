import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Loader from './Loader'
import Card_character from './Card_character'
import '../Style/location.css'
import Botonera_location from './Botonera_location'

const Location = () => {
  const [Location, setLocation] = useState([])
  const [getpush, setGetpush] = useState([])
  const [loader, setLoader] = useState(false)
  const [getName, setGetName] = useState()
  const [loaders, setLoaders] = useState(false)
  const [anterior, setAnterior] = useState(0)
  const [get_anterior, setGet_anterior] = useState()
  const [indexfirts, setIndexfirts] = useState(0)
  const [indexlast, setIndexlast] = useState(12)
  const reubicacion = () => {
    let reset = Math.ceil(Math.random() * getpush.length)
    return reset
  }
  const [rando, setRando] = useState()
  useEffect(() => {
    let option = []
    for (let i = 1; i <= 7; i++) {
      let URL = `https://rickandmortyapi.com/api/location?page=${i}`
      axios.get(URL)
        .then(res => {
          res.data.results.map((user) => {
            if (user.residents.length != 0) {
              option.push({ value: user.id, label: user.name.toUpperCase() })
              setGetpush(option)
            }
          })

        })
        .catch(err => console.log(err))
    }
  }, [])

  if (getpush.length >= 94 && anterior === 0) {
    setAnterior(1)
    setGetName(getpush[reubicacion()].value)
  }
  useEffect(() => {
    let prueba = []
    let url = `https://rickandmortyapi.com/api/location/${getName}`
    if (anterior === 1) {
      axios.get(url)
        .then(res => {
          res.data.residents.map((url2) => {
            setLoader(true)
            axios.get(url2)
              .then(res => {
                prueba.push(res.data)
                setLocation({ results: prueba })
                setLoaders(true)
              })
              .catch(err => console.log(err))
          })
        })
        .catch(err => console.log(err))
    }

  }, [getName])

  const getchange = ({ value }) => {
    setGetName(value)
    setIndexfirts(0)
    setIndexlast(12)
  }
  if (getName != get_anterior) {
    setGet_anterior(getName)
    setLoaders(false)
  }
  const numero_pages = (Math.ceil((Location.results?.length) / 12))
  const character = { results: Location.results?.slice(indexfirts, indexlast) }
  return (
    <article className='Locations-main'>
      {loader ?
        <>
          <Select className='select'
            options={getpush}
            onChange={getchange}
          />
          <Botonera_location
            Numpages={numero_pages}
            setIndexfirts={setIndexfirts}
            setIndexlast={setIndexlast}
            indexlast={indexlast}
          />
          <Card_character
            loader_character={loaders}
            getdata={character}
          />
          <Botonera_location
            Numpages={numero_pages}
            setIndexfirts={setIndexfirts}
            setIndexlast={setIndexlast}
            indexlast={indexlast}
          />
        </>
        :
        <Loader />
      }
    </article>
  )
}

export default Location