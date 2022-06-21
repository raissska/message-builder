import React, { useEffect, useState } from 'react'
import './App.css';
import ButtonsSection from './components/ButtonsSection';
import MessageBuilder from './components/MessageBuilder'
import PreviewSection from './components/PreviewSection';

export const Context = React.createContext(null);

function App() {

  const [message,setMessage] = useState('')
  const [buttonList,setButtonList] = useState([])

  useEffect(() => {

    new Promise((resolve) => {
      setTimeout(() => {
 
        let jsonData = require('./utils/placeholdersData.json');
        resolve(jsonData)
      },[1000])
    }).then(response => {
     
      setButtonList(response)
    }).catch(err => console.log(err))

  },[])

  return (
    <Context.Provider value={{message,setMessage,buttonList}}>
    <div className="container">
    <MessageBuilder/>
    <ButtonsSection/>
    <PreviewSection/>
     
    </div>
    </Context.Provider>
  );
}

export default App;
