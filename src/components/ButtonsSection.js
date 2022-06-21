import React, { useContext } from 'react'
import { Context } from '../App'

export default function ButtonsSection (){

  const {buttonList,message,setMessage} = useContext(Context)

  const handleClick = (name) => {


    const textarea = document.getElementById('message');
    const startPosition = textarea.selectionStart;
    const endPosition = textarea.selectionEnd;
    let result = message.substring(0,startPosition) + `[${name}]` + message.substring(endPosition,message.length)

    setMessage(result)
    textarea.value = result;
    textarea.focus()
    textarea.selectionEnd = (startPosition === endPosition) ? (endPosition + name.length + 2) : endPosition

    

    
  }

  return(
    <div className='buttons-section'>
      {Object.keys(buttonList).map((keyButton => <div className='buttons-section-box' key={buttonList[keyButton].name}>
        <button  className='buttons-section-button' onClick={() => handleClick(keyButton)}>{buttonList[keyButton].name.toUpperCase()}</button></div>))}
    </div>
  )

}