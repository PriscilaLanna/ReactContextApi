import React from 'react'

const valorPadrao = {
    racas: [],
    racaSelecionada: () => {}
}

const RacaContext = React.createContext(valorPadrao)

export default RacaContext