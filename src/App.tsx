import React, { useState } from 'react';
import Input from './components/Input';
import Display from './components/Display';

export default function App() {
  const [ query, setQuery ] = useState();

  return (
    <>
      <h1>GIF Generator</h1>
      <Input />
      <Display />
    </>
  )
}