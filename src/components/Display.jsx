import React, { useState } from 'react';
import Gif from './Gif.jsx';

export default function Display(props) {
    const gifDisplay = props.gifs;

    const gifElements = gifDisplay && gifDisplay.map((gif, i) => {
        return (
           <Gif 
              gif={ gif } 
            //   copied={ copied } 
            //   isCopied={ isCopied } 
              key={`gif--video${i}`} 
            />
        )
    });

    return (
        <div className='search-result--container'>
            { gifElements }
        </div>
    )
}