import React, { useCallback, useContext } from 'react'
import { Context } from '../App'


export default function PreviewSection(){

  const {message,buttonList} = useContext(Context)

  let previewText = useCallback(() => {
    let newStr = message;
    Object.keys(buttonList).forEach(keyButton => {
      let reg = `[${keyButton}]`;
      newStr = newStr.replaceAll(reg, buttonList[keyButton].example);
    })
    return newStr
   
  },[message,buttonList])
  
  return(
    <div className='preview-section'>
      <span className='preview-section-title'>Preview</span>
      <div className='preview-section-container'>{previewText()}</div>

    </div>
  )
}