import React from 'react'
import Context from '../../context/createContext';
import getAttributes from "../../utilities/getAttributes";
import InputBox from "../inputBox/InputBox";
import setAnimation from "../../utilities/setAnimation";

export default function ToolBar() {
 const [context, setContext] = React.useContext(Context)

 setAnimation();

 React.useEffect(() => {
    if(context !== null) {
        let svg = document.getElementsByTagName('svg')[0]
        let svgAttributes = getAttributes(svg)
        console.log(svgAttributes)
    }
 },[context])

  return (
    <InputBox label="Animation"/>
  )
}
