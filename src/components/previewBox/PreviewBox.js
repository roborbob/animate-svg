import React from 'react'
import Context from "../../context/createContext";

export default function PreviewBox() {
    const [context, setContext] = React.useContext(Context)
  return (
    <div id='svg-box'
    dangerouslySetInnerHTML={{__html: context}}
  />
  )
}
