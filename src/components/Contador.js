import React, { useState } from 'react'

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="container pt-4">
      <div className="jumbotron">
        <h1 className="display-4">Contador de Click!</h1>
        <p className="lead">
          Esta es una app para contar la veces que es clickeado el botón
        </p>
        <hr className="my-4" />
        <p className="lead">
          Cantidad de veces clickeado: <span className="font-weight-bold">{ contador }</span>
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={ () => { setContador(c => c +1 ) } }
        >Clickeame!</button>
      </div>
    </div>
  )
}
