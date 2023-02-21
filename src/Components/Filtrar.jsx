import React from 'react'
import { useState } from 'react'
import '../Style/filtrar.css'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'

const Filtrar = () => {
  const { name } = useParams()
  const { register, handleSubmit, reset } = useForm()
  const [Namedata, setNamedata] = useState(name)

  const getchange = (value) => {
    setNamedata(value.search)
  }
  const remover = () => {
    setNamedata('')
  }
  return (
    <form className='filtrar' onChange={handleSubmit(getchange)} >
      <div className='filter_text'>
        <input className='barra' type="text" placeholder='seacrh in the character' autoComplete='off' {...register('search')} value={Namedata} />
        <Link onClick={remover} className={Namedata === undefined || Namedata === '' ? 'off' : 'on'} to='/Character/1'> <i className='bx bx-x'></i></Link>
      </div>
      <Link className="submit" to={Namedata === undefined || Namedata === '' ? '/Character/1' : `/Character/search/1/${Namedata}`}><i className='bx bx-search'></i></Link>
    </form>
  )
}

export default Filtrar