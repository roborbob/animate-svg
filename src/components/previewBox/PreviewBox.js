import React from 'react'
import Context from "../../context/createContext";
import NewSvg from "../../components/newSvg/NewSvg";

export default function PreviewBox() {
    const [context, setContext] = React.useContext(Context)
    // const SVGdocument = React.useMemo( () => 
    //   {
    //     if (context) {
    //       console.log(context)
    //       return document.getElementsByTagName('svg')[0]
    //     } else {
    //       return <h3>No preview available</h3>
    //     }
    //   }, [context])


  return (
    <div id="previewBox">
     {context ? 
     <NewSvg/>
     : <h3>No preview available</h3>}
    </div>
  )
}
