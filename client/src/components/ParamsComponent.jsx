import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ParamsComponent= (props) => {
  const {textWord, textColor, bgColor} = useParams()

  return (
    <div>
      {/* isNan means that is this a number */}
      {
        isNaN(textWord)? 
        <p style={
                    textColor? 
                    {color: textColor, backgroundColor: bgColor}
                    :null
                }> <h3 style={{color:"blue"}}>This is a {textWord}</h3></p>:
        <p> <h3 style={{color:"green"}}>This is number  {textWord}</h3></p>
      }
    </div>
  )
}

export default ParamsComponent;