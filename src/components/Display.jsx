import React from 'react';

export default function Display(props) {
    const gifDisplay = props.gifs;

    const gifElements = gifDisplay && gifDisplay.map((gif, i) => {
        return (
            <video 
              width="325" 
              height="250" 
              key={`gif--video${i}`} 
              controls 
              autoPlay 
              loop 
              muted>
              <source 
                src={`${ gif.mp4 }`} 
                type="video/mp4" 
                alt={`${ gif.title }`} 
                key={`gif--source${i}`} />
            </video>
        )
    });

    return (
        <div className='search-result--container'>
            { gifElements }
        </div>
    )
}