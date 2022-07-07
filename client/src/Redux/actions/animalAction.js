import { ADD_TO_FAV, GET_CAT, GET_DOG, GET_FAV } from "../types/types";
import axios from 'axios'


export const getCat = (url) => ({
  type: GET_CAT,
  payload: url
})

export const getDog = (url) => ({
  type: GET_DOG,
  payload: url
})

export const addToFav = (value) => ({
  type: ADD_TO_FAV,
  payload: value
})
export const getFav = (value) => ({
  type: GET_FAV,
  payload: value
})

export const getAnimal = (animal) => {
  return (dispatch) => {
    if (animal === 'cat') {
      axios(`https://api.thecatapi.com/v1/images/search?size=full`)
        .then((res) => {
          console.log(res.data[0].url);
          console.log(localStorage.getItem('black'));
          const qq = JSON.parse(localStorage.getItem('black'))
          console.log(qq);
          if (!qq?.includes(res.data[0].url)) {
            dispatch(getCat(res.data[0].url))
          } else {
            getAnimal()
          }
        })
    }
    if (animal === 'dog') {
      axios(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => {
          const qq = JSON.parse(localStorage.getItem('black'))
          if (!qq?.includes(res.data.message)) {
            dispatch(getDog(res.data.message))
          } else {
            getAnimal()
          }
        })
    }
  }
}
export const addToFavourites = (input, url) => async (dispatch) => {
  await fetch('http://localhost:3001/favourite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imageURL: url,
      comment: input.comment
    }),
  })
}
export const getFavourites = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/favourite')
  dispatch(getFav(res.data))
}

