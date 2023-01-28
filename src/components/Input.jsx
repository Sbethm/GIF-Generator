import React, { useState } from 'react';

export default function Input (props) {
    const handleChange = props.handleChange;
    const query = props.queyState;

    return (
        <form onSubmit={ props.onSubmit } className='flex-center'>
            <label>
                <input 
                    type='text'
                    placeholder='Search GIF' 
                    name='gifQuery'
                    onChange={ handleChange }
                />
            </label>
            <input className='submitBtn' type="submit" value="submit" />
        </form>
    )
}