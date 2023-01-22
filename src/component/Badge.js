import React from 'react'
import './badge.css'

const Badge = (props) => {
  return (
    <div className={props.className}>
        {props.text}
    </div>
  )
}

export default Badge