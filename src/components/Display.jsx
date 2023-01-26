import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Display(props) {
    const gifDisplay = props.gifs;
    const [ isCopied, setIsCopied ] = useState(false);

    const copied = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    }


    const gifElements = gifDisplay && gifDisplay.map((gif, i) => {
        return (
            <div className='gif--container flex-center'>
                <video 
                    // width="325" 
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
                <CopyToClipboard className='copyBtn' text={ gif.mp4 } onCopy={ () => copied() }>
                  <button>{ isCopied ? 'Copied!' : 'Copy' }</button>
                </CopyToClipboard>
            </div>
        )
    });

    return (
        <div className='search-result--container'>
            { gifElements }
        </div>
    )
}