import React, { useState } from 'react';
import Input from './components/Input.jsx';
import Display from './components/Display.jsx';

export default function App() {
  const [ query, setQuery ] = useState('black cat');
  const [ gifDisplay, setDisplay ] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(query.length)
    //check to make sure user filled input after submit
    if(query.length) {
        fetch(`/gif/${query}`)
        .then((res) => res.json())
        .then((array) => {
          console.log('Here is your result!', array);
          setDisplay(array)
        })
        .catch(err => { 
            console.log("YOUR POST WAS NOT SUCCESSFUL", err);
        })
    } else {
        window.alert("Please fill in every box.")
    }        
}


  return (
    <>
      <h1>GIF Generator</h1>
      <Input onSubmit={ onSubmit } />
      <Display gifs={ gifDisplay } />
    </>
  )
}