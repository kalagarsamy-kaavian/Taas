import React from 'react'
import { useNavigate } from 'react-router-dom';
function World(){
    const navigate=useNavigate();
    function submit(){
        navigate('/hello')
    }
    return (
        <>
        <h1>Docker With React App</h1>
        <lable>Welcome to all</lable>
        <button type='submit' className='submitbtn' onClick={submit}>Click Here</button>
        </>
        
    )
}
export default World;