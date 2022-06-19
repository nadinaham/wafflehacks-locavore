import React from 'react'

const ProgressBar = props => {
  const { number, completed } = props
  const containerStyles = {
    height: 37,
    width: 166,
    backgroundColor: '#7F5130',
    borderRadius: 5,
    marginLeft: '7vh',
    marginTop: '2vh',
  }

  const fillerStyles = {
    height: 37,
    width: `${completed}%`,
    backgroundColor: '#AB8974',
    borderRadius: 'inherit',
    textAlign: 'left',
  }

  const labelStyles = {
    color: 'white',
    width: 'fit-content',
    fontFamily: 'Jost Semibold',
    position: 'absolute',
    paddingTop: 10,
    paddingLeft: 10,
    height: 37,
  }
  return (
    <div style={containerStyles}>
        <span style={labelStyles}>{`${number}/8 ★`}</span>
      <div style={fillerStyles}/>
    </div>
  )
}

export default ProgressBar
