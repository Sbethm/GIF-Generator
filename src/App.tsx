import React, { useState } from 'react';
import Input from './components/Input';
import Display from './components/Display';

export default function App() {
  const [ query, setQuery ] = useState('');
  const [ gifDisplay, setGifDisplay ] = useState(null);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setQuery(value);
  }

  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    //check to make sure user filled input after submit
    if(query.length) {
        fetch(`/gif/${query}`)
        .then((res) => res.json())
        .then((array) => {
          if(gifDisplay) {
            setGifDisplay(null)
            setGifDisplay(array)
          } else {
            setGifDisplay(array)
          }
        })
        .catch(err => { 
            console.log("YOUR POST WAS NOT SUCCESSFUL", err);
        })
    } else {
        window.alert("Please fill in every box.")
    }        
    //reset the input value
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className='main--container'>
      <h1>GIF Generator</h1>
      <Input onSubmit={ onSubmit } handleChange={ handleChange } />
      <Display gifs={ gifDisplay } />
    </div>
  )
}