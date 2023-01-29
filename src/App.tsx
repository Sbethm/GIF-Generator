import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Display from './components/Display';

export default function App() {
  const [ query, setQuery ] = useState('');
  const [ gifDisplay, setGifDisplay ] = useState(null);

  //fetch 3 random gifs for onload
  useEffect(() => {
    fetch(`/gif`)
      .then((res) => res.json())
      .then((array) => {
        setGifDisplay(array);
      })
      .catch(err => { 
          console.log("YOUR REQUEST WAS NOT SUCCESSFUL", err);
      })
  }, [])

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
          setGifDisplay(null)
          setGifDisplay(array)
        })
        .catch(err => { 
            console.log("YOUR REQUEST WAS NOT SUCCESSFUL", err);
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
      <Display gifDisplay={ gifDisplay } />
    </div>
  )
}