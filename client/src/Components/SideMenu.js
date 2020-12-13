import React, { useState } from 'react';
import ChapterBtn from './ChapterBtn';
import ToolBar from './ToolBar';

const AddChapterForm = props => {
    const [title, setTitle] = useState('');

    const addNewChapter = e => {
        e.preventDefault();

        props.addChapter(title)
    }

    return (
        <form onSubmit={(e) => addNewChapter(e)}>
            <input type='text' className='chapter-title-input' onChange={e => setTitle(e.target.value)} placeholder='add chapter'/>
            <button type='submit'>+</button>
        </form>
    )
}


const SideMenu = props => {
    const setFile = props.setFile;
    const file = [props.file];
    const chapters = [];

    const displayChapters = props => {
        if (file.length > 0) {
            for (let i = 0; i <= file.length + 1; i++) {
                file.map(item => {
                    item !== undefined ? chapters.push(item[i].chapter) : null ;
                })
            }
        }
    }
    displayChapters()

    return (
        <div className='side-menu'>
            <ToolBar setFile={setFile}/>
            {/* add chapter */}
            <div>
                <AddChapterForm addChapter={props.addChapter} />
                <div className='chapter-list'>
                    {
                    chapters.map((chapter) => (
                        <ul>
                            <li value={chapter} className='chapter-btn' 
                            onClick={() => props.displayChapter(chapter)}
                            onDoubleClick={() => console.log('ze old double CLICK!!!')}
                        >
                            {chapter}
                        </li>
                        </ul>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideMenu;