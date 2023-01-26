import React from 'react';
import ClassList from './components/ClassList';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';

export default function App(){
    return (
        <>
            <Navbar />
            <div className='container'>
                <ToDo />
                <ClassList />
            </div>
        </>
    )
}