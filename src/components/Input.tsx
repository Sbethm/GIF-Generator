import React, { useState } from 'react';

export default function Input (props) {


    return (
        <form>
            <label>
                Search GIF:
                <input 
                    type='text'
                    placeholder='Coding Cat' 
                    name='gifQuery'
                />
            </label>
        </form>
    )
}