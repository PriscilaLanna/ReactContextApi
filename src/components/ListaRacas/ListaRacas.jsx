import React from 'react'
import './styles.scss'
import RacaContext from '../../context/raca';

const ListaRacas = () => {
  return (
    <RacaContext.Consumer>
      {
        ({racas, selecionaRaca}) => (
          <ul className="lista-racas">
            {
              racas.map(raca => (
                <li
                  className="lista-racas__item"
                  key={raca.id}
                  onClick={() => selecionaRaca(raca.name)}
                >
                  {raca.name}
                </li>
              ))
            }
          </ul>
        )
      }
    </RacaContext.Consumer>
  )
}

export default ListaRacas