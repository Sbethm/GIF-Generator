import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Gif(props: any) {
    const gif = props.gif;

    const copied = (event: React.FormEvent<HTMLButtonElement>) => {
        //inform user URL was copied
        (event.target as HTMLElement).innerText = 'Copied!';
        setTimeout(() => (event.target as HTMLElement).innerText = 'Copy', 1000);
    }
    
    return (
        <div className='gif--container'>
            <CopyToClipboard  text={ gif.mp4 }>
              <button className='copyBtn' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => copied(e)}>
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
                />
            </video>
        </div>
    )
}