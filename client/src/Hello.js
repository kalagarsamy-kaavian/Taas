

import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

function Hell() {
    const [test,setTest] = useState('');
    const [btnval, setBtnval] = useState('');
    const navigate = useNavigate();

    function disp() {
            fetch('http://localhost:3001/datas',{method:'post',body: JSON.stringify({test}),headers:{'content-type':'application/json'}})
            .then((res)=>res.json()
            .then((data)=>{
                console.log(btnval);
                window.alert("Inserted Successfully");
                setBtnval(data); 
                navigate('/')
            })
            )
        }
    return (<>
        <div>
        <h1>Welcome To All...</h1><br />
        <input type='text' placeholder='data' onChange={e => setTest(e.target.value)}></input><br />
        <button onClick={disp}>Submit</button>
        </div>
    </>)
}
export default Hell;