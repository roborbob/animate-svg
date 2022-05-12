import React from 'react'
import "./styles.scss";

export default function InputBox({label}) {

  function setAttribute(e) {
    // console.log(e.target.value)
  }

  return (
    <div className="input-container">
    <label id={label}>{label}</label>
    <input onChange={setAttribute}></input>
    </div>
  )
}
