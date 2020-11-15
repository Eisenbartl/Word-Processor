import React, { useState } from 'react';

const DocumentContainer = ({ SaveFile }) => {
    const [value, setValue] = useState('')

    const saveDocument = e => {
        e.preventDefault();
        if(!value) return;
        SaveFile(value);
    }

    return (
        <form className='document-container' onSubmit={saveDocument}>
            {/* <textarea
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
            /> */}
            <div 
                contentEditable='true'
                className='input'
            >
            </div>
            <button type='submit'>save</button>
        </form>
    )
}

export default DocumentContainer;