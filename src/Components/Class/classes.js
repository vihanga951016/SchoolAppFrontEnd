import React from 'react'
import Popup from './classPopup'
import { useState , useEffect} from 'react'
import axios from 'axios'

import './classes.css'

const AddClass = () => {

    const [buttonPopup, setbuttonPopup] = useState(false)


    return (
        <div className='content'>
        <h3>Add Class</h3>
        <button onClick={() => setbuttonPopup(true)} type="button" className="btn btn-info m-2">Add Class</button>
        
        <table className="table mt-3">
            <thead className="thead-dark">
                <tr>
                <th scope="col" style={{textAlign:'center'}}></th>
                <th scope="col" style={{textAlign:'center'}}>Grade</th>
                <th scope="col" style={{textAlign:'center'}}>Letter</th>
                <th scope="col" style={{textAlign:'center'}}>Class Teacher</th>
                <th scope="col" style={{textAlign:'center'}}>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{textAlign:'center'}}>1</td>
                <td style={{textAlign:'center'}}>6</td>
                <td style={{textAlign:'center'}}>A</td>
                <td style={{textAlign:'center'}}>Nanda</td>
                <td style={{textAlign:'center'}}>
                    <button type="button" className="btn btn-warning">Update</button>
                    <button type="button" className="btn btn-danger ml-2">Delete</button>    
                </td>
                </tr>
            </tbody>
        </table>
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>  
        </div>
    )
}

export default AddClass
