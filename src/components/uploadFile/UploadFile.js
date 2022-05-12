import React from 'react'
import "./style.scss";
import {Context, ContextData} from "../../context/createContext";

export default function UploadFile() {
    const [context,setContext] = React.useContext(Context)
    const [contextData,setContextData] = React.useContext(ContextData)
    const [file,setFile] = React.useState()

    React.useEffect(() => {
        let reader = new FileReader();  
        let domParser = new DOMParser();     
        if(file) {
            reader.onload = function() {
                let data = domParser.parseFromString(reader.result, "image/svg+xml")?.firstChild;
                setContext(true)
                setContextData(data)
            }
            reader.readAsText(file);
        }
    },[file])

    function handleChange(event) {
        setFile(event?.target?.files[0])
    }

  return (
      <form style={{display: context ? `none` : `block`}}>
        <input type="file" className="input-box" onChange={handleChange} accept="image/*"/>
     </form>
  )
}
