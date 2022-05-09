import React from "react";
import './App.scss';
import Context from "./context/createContext"; 
import ToolBar from "./components/toolBar/ToolBar";
import PreviewBox from "./components/previewBox/PreviewBox";
import UploadFile from "./components/uploadFile/UploadFile";




function App() {
  const [context,setContext] = React.useState(false)

  function targetHandler(e) {
    console.log(e.target.value)
  }

  return (
    <div id="box">
    <Context.Provider value={[context,setContext]}>
      <div className="col-left">
        <ToolBar/>
      </div>
      <div className="col-right">
          <UploadFile/>
          <PreviewBox/>
      </div>
      </Context.Provider>
    </div>
  );
}

export default App;
