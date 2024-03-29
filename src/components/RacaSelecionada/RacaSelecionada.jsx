import React from 'react'
import './styles.scss'
import RacaSelecionadaContext from '../../context/racaSelecionada'

const RacaSelecionada = () => (
  <RacaSelecionadaContext.Consumer>
    {
      racaSelecionada => {
        return(
          <div className={`raca-selecionada`}>
            <h2 className="raca-selecionada__nome">
              {racaSelecionada.name}
            </h2>
            <p className="raca-selecionada__info">
              <span className="raca-selecionada__info__descricao">
                Tempo de vida:
              </span>
              {racaSelecionada.life_span}
            </p>
            <img
              alt="Imagem de raca"
              className="raca-selecionada__imagem"
              src={racaSelecionada.imagem}
            />
          </div>
        )
      }
    }
  </RacaSelecionadaContext.Consumer>
)

export default RacaSelecionada