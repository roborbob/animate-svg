import React from "react";
import './App.scss';
import {Context, ContextData} from "./context/createContext"; 
import ToolBar from "./components/toolBar/ToolBar";
import PreviewBox from "./components/previewBox/PreviewBox";
import UploadFile from "./components/uploadFile/UploadFile";




function App() {
  const [context,setContext] = React.useState(false)
  const [contextData,setContextData] = React.useState(null)

  function targetHandler(e) {
    console.log(e.target.value)
  }

  return (
    <div id="box">
    <Context.Provider value={[context,setContext]}>
    <ContextData.Provider value={[contextData,setContextData]}>
      <div className="col-left">
        <ToolBar/>
      </div>
      <div className="col-right">
          <UploadFile/>
          <PreviewBox/>
      </div>
      </ContextData.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
