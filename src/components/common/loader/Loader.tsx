import React from 'react'
import { Spinner } from 'react-bootstrap'

interface ISSpinnerProps {}
const Loader: React.FC<ISSpinnerProps> = () => {
  return (
    <div className="main">
      <div className="ring">
        <span className="join"></span>
      </div>
    </div>
  )
}

export default Loader
