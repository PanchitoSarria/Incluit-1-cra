import React from 'react'

const Icon = ({imgSrc, iconStyling}) => {
  return (
    <img src={imgSrc} width='16' height='16' className={`icon ${iconStyling}`}/>
  )
}

export default Icon