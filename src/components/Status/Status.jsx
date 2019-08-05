import React from 'react'
import StatusContext from '../../context/status'
import './styles.scss'

const Status = () => (
  <StatusContext.Consumer>
    {
      status => {
        return <p className="status">{status}</p>
      }
    }  
  </StatusContext.Consumer>
)

export default Status
