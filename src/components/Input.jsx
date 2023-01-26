import React, { useState } from 'react';

export default function Input (props) {
    const handleChange = props.handleChange;

    return (
        <form onSubmit={ props.onSubmit } className='flex-center'>
            <label>
                Search GIF:
                <input 
                    type='text'
                    placeholder='coding cat' 
                    name='gifQuery'
                    onChange={ handleChange }
                />
            </label>
            <input className='submitBtn' type="submit" value="submit" />
        </form>
    )
}