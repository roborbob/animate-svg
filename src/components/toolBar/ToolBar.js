import React from 'react'
import data from '../../data.json';
import {Context} from '../../context/createContext';
import getAttributes from "../../utilities/getAttributes";
import InputBox from "../inputBox/InputBox";
import setAnimation from "../../utilities/setAnimation";

export default function ToolBar() {
 const [context, setContext] = React.useContext(Context)

 function setAttribute(e) {
   console.log(e.target.value)
 }


  return (
    <>
    {
      Object.entries(data).map((label, key) => (
        <InputBox label={label} key={key} onChange={setAttribute}/>
      ))
    }
    </>
  )
}
