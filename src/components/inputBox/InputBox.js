import React from 'react'
import "./styles.scss";

export default function InputBox({label}) {
  return (
    <div className="input-container">
    <label id={label}>{label}</label>
    <input></input>
    </div>
  )
}
