import React from 'react'

const Button = ({title}) => {
  return (
    <button href={title} className="boton">{title}</button>
  )
}

export default Button