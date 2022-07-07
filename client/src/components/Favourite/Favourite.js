import React, { useEffect } from 'react'
import { getFavourites } from '../../Redux/actions/animalAction'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
// import { Card } from 'reactstrap';

export default function Favourite() {
  const favourites = useSelector((state) => state.favourites)
  const dispatch = useDispatch()


  const btnHandler = () => {
    dispatch(getFavourites())
  }

  useEffect(() => {
    btnHandler()
  }, []);

  useEffect(() => {
    console.log('Test in useEffect')
    console.log(favourites);
    console.log(favourites[Math.floor(Math.random() * favourites.length)]?.imageURL);
  }, [favourites])


  const randomImg = () => {
    return (favourites?.length && favourites[Math.floor(Math.random() * favourites.length)]?.imageURL)
  }

  return (
    // <>
    //   <ul>
    //     {favourites?.length && favourites.map((el) => (
    //       <li key={el.id}>
    //         <Card className='sizeImage'>
    //           <img className='sizeImg' alt='card' src={el.imageURL} />
    //         </Card>
    //       </li>
    //     ))}
    //   </ul>
    // </>

    <>
      {favourites.length ?
        <div>
          <img className='sizeImg' alt='card' src={randomImg()} />
          <br />
          <Button
            onClick={btnHandler}
            color="warning"
            outline
          >
            next
          </Button>
        </div>
        :
        <p></p>
      }
    </>

  )
}
