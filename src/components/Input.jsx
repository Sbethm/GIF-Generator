import React, { useState } from 'react';

export default function Input (props) {


    return (
        <form onSubmit={ props.onSubmit }>
            <label>
                Search GIF:
                <input 
                    type='text'
                    placeholder='Coding Cat' 
                    name='gifQuery'
                />
            </label>
            <input className='primary--btn' type="submit" value="Submit" />
        </form>
    )
}