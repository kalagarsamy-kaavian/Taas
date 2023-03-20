import React, { useState } from 'react';

export default function Data() {
    const [data, setData] = useState('');
    const [btnval, setBtnval] = useState('');
    function submit() {
        console.log(data);
        fetch('http://localhost:3001/datas',
            { method: 'post', body: JSON.stringify({ data }), headers: { 'content-type': 'application/json' } })
            .then((res) => res.json()
                .then((data) => {
                    console.log(btnval);
                    window.alert('Inserd Data in DB..');
                    setBtnval(data);
                })
            )
    }
    return (<>
        <h3>Enthe The Data :<input type='text' placeholder='data' onChange={e => setData(e.target.value)}></input><br />
            <button onClick={submit}>Submit</button>
        </h3>
    </>)
}