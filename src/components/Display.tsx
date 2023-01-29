import React from 'react';
import Gif from './Gif';

export default function Display(props: any) {
    const gifDisplay = props.gifDisplay;

    const gifElements = gifDisplay && gifDisplay.map((gif: { mp4: string}, i: number) => {
        return (
           <Gif 
              gif={ gif } 
              key={`gif--video${i}`} 
            />
        )
    });

    return (
        <div className='search-result--container flex-center'>
            { gifElements }
        </div>
    )
}