import React, { useState } from 'react';
import Input from './components/Input.jsx';
import Display from './components/Display.jsx';

export default function App() {
  const [ query, setQuery ] = useState('black cat');
  const [ gifDisplay, setDisplay ] = useState(null);

  /*------- Input and Fetch Functions -------*/
  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    //deny search if query contains special characters
    /*---------*/
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

  /*------- Copy URL -------*/



  return (
    <>
      <h1>GIF Generator</h1>
      <Input onSubmit={ onSubmit } handleChange={ handleChange } />
      <Display gifs={ gifDisplay } />
    </>
  )
}