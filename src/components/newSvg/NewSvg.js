import React from 'react'
import data from '../../data.json';
import getAttributes from '../../utilities/getAttributes'

export default function NewSvg(svgAtrributes, animationAttributes) {
  let svgData = getAttributes(svgAtrributes.data)
  const NewSvgElement = React.useCallback(() => {
    console.log(svgData)
    let svgAt = svgData[0]?.map(i => `${i}:${i},`)
  
    return React.createElement(
      'svg',
      svgAt
    )
  }, [svgAtrributes])
    
  return (
    <NewSvgElement/>
  )
}
