import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap'
import { addToFavourites } from '../../Redux/actions/animalAction';


export default function TypeHere({ btnHandler, data, setForm }) {
  const [input, setInput] = useState({})
  const dispatch = useDispatch()
  const inputHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

   function addFavourite(data) {
    dispatch(addToFavourites(input, data));
    btnHandler()
    setForm(false)
  }

  return (
    <div>
      <br />
      <Input onChange={inputHandler} value={input.comment || ''} name="comment" />
      <br />
      <Button
        onClick={() => addFavourite(data)}
        color="primary" >
        Добавить в избранное
      </Button>
    </div>
  )
}
