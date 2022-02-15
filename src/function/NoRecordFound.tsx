import React from 'react'

interface ISNorecordProps {}

const NoRecordFound: React.FC<ISNorecordProps> = () => {
  return (
    <div className="emptyRec">
      <h3>No Record Found...</h3>
    </div>
  )
}

export default NoRecordFound
