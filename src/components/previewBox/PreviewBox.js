import React from 'react'
import {Context, ContextData} from "../../context/createContext";
import NewSvg from "../../components/newSvg/NewSvg";

export default function PreviewBox() {
    const [context, setContext] = React.useContext(Context)
    const [contextData, setContextData] = React.useContext(ContextData)

    React.useEffect(() => {
      // console.log(contextData)
    }, [context])

  return (
    <div id="previewBox">
     {context ? 
     <NewSvg data={contextData}/> 
     : <h3>No preview available</h3>}
    </div>
  )
}
