import React from 'react'
import { Button } from 'reactstrap'

export default function Buttons({ btnHandler, formHandler, btnSecHandler, data }) {

  return (
    <div>
      <br />
      <Button onClick={formHandler}
        color="warning"
        outline
      >
        👍
      </Button>
      {' '}
      <Button
        onClick={btnHandler}
        color="warning"
        outline>
        😊
      </Button>
      {' '}
      <Button
        onClick={() => btnSecHandler(data)}
        color="warning"
        outline
      >
        👎
      </Button>
      {' '}
    </div>
  )
}
