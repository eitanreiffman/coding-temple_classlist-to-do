import React from 'react';
import ClassList from './components/ClassList';
import ToDo from './components/ToDo';

export default function App(){
    return (
        <>
            <div className='container'>
                <ToDo />
                <ClassList />
            </div>
        </>
    )
}