import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Gif(props) {
    const gif = props.gif;
    // const isCopied = props.isCopied;

    const copied = (e) => {
        //inform user URL was copied
        console.log(e.target.innerText)
        e.target.innerText = 'Copied!';
        setTimeout(() => e.target.innerText = 'Copy', 1000);
    }
    
    return (
        <div className='gif--container'>
            <CopyToClipboard  text={ gif.mp4 }>
              <button className='copyBtn' onClick={(e) => copied(e)}>
                { 'Copy' }
              </button>
            </CopyToClipboard>
            <video 
                controls 
                autoPlay 
                loop 
                muted>
                <source 
                    src={`${ gif.mp4 }`} 
                    type="video/mp4" 
                    alt={`${ gif.title }`}  
                />
            </video>
        </div>
    )
}