import React, { useState, useEffect } from 'react'

export default function ClassList() {

    const [classList, setClassList] = useState([]);

    useEffect(() => {
        fetch("https://scratched-juniper-salto.glitch.me/kekambas")
        .then(response => response.json())
        .then(data => {
            setClassList(data);
        });
    }, []);

    const getOrClear = () => {
        if (classList.length){
            setClassList([])
        } else {
            fetch("https://scratched-juniper-salto.glitch.me/kekambas")
            .then(response => response.json())
            .then(data => {
                setClassList(data);
            });
        }
    }

    return (
        <>
            <div className="text-center">
                <h1 className='mt-5 text-success'><u>Class List of Kekambas-106</u></h1>
                <button className='btn btn-success fw-bold fs-4 my-3' onClick={getOrClear}>{ classList.length ? "Clear Class List" : "Get Class List" }</button>
                <div>
                    {classList.map(cl => <div className='list-group-item my-2 fw-bold fs-4' key={cl.id}>{cl.first_name} {cl.last_name}</div>)}
                </div>
            </div>
        </>
  )
}
