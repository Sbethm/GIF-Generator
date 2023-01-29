import React from 'react';

export default function Input (props: any) {
    const handleChange = props.handleChange;
    const onSubmit = props.onSubmit;

    return (
        <form onSubmit={ onSubmit } className='flex-center'>
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