import React from 'react'
import Context from "../../context/createContext";

export default function UploadFile() {
    const [context,setContext] = React.useContext(Context)
    const [file,setFile] = React.useState()

    React.useEffect(() => {
        const previewBox = document.getElementById("previewBox");
        let reader = new FileReader();       
        if(file) {
            reader.onload = function() {
                let data = reader.result;
                setContext(data)
            }
            reader.readAsText(file);
        }
    },[file])

    function handleChange(event) {
        setFile(event?.target?.files[0])
    }

  return (
      <form>
        <input type="file" onChange={handleChange} accept="image/*"/>
     </form>
  )
}
