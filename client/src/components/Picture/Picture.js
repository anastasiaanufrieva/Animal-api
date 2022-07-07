import React, { useEffect, useState } from 'react'
import { Card } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import Buttons from '../Buttons/Buttons'
import TypeHere from '../TypeHere/TypeHere';
import Spin from '../Spin/Spin';
import { getAnimal } from '../../Redux/actions/animalAction';

export default function Picture({ animal }) {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(false)
  const dispatch = useDispatch()
  const { cat, dog } = useSelector((state) => state.animal)

  useEffect(() => {
    setLoading(false)
    setData(cat)
  }, [cat])

  useEffect(() => {
    setLoading(false)
    setData(dog)
  }, [dog])

  const btnHandler = () => {
    setLoading(true)
    if (animal === 'cat') {
      dispatch(getAnimal('cat'))
    }
    if (animal === 'dog') {
      dispatch(getAnimal('dog'))
    }
  }

  useEffect(() => {
    btnHandler(animal)
  }, [])



  const formHandler = () => {
    setForm(true)
  }

  const btnSecHandler = (url) => {
    const qq = JSON.parse(localStorage.getItem('black')) || []
    if (!qq.includes(url)) {
      localStorage.setItem('black', JSON.stringify([...qq, url]))
    }
  }

  return (
    <div>
      <Card className='sizeImage'>
        {loading
          ?
          <Spin />
          :
          <img className='sizeImg' alt='card' src={data} />
        }
        <Buttons btnHandler={btnHandler} formHandler={formHandler} btnSecHandler={btnSecHandler} data={data} />
      </Card>
      {form ?
        <TypeHere btnHandler={btnHandler} data={data} setForm={setForm} />
        :
        <p></p>
      }
    </div>
  )
}
