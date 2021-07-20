import React from 'react'
import './classes.css'

function classPopup(props){
    return (props.trigger) ? (
        <div className='popup-classes'>
            <div className='popup-inner-classes'>
            <h2>Add a new admin</h2>
            <button style={{background:'red'}} className='close-btn' onClick={() => props.setTrigger(false)}>X</button>

            <form>
                <ul style={{listStyleType:'none',marginTop:'10px'}}>

                    <li for="grade">Type</li>
                    <select id="grade" name="grade">
                        <option value="grade1">1</option>
                        <option value="grade2">2</option>
                        <option value="grade3">3</option>
                        <option value="grade4">4</option>
                        <option value="grade5">5</option>
                        <option value="grade6">6</option>
                        <option value="grade7">7</option>
                        <option value="grade8">8</option>
                        <option value="grade9">9</option>
                        <option value="grade10">10</option>
                        <option value="grade11">11</option>
                    </select>

                    <li for="letter">NIC:</li>
                    <select id="letter" name="letter">
                        <option value="grade1">A</option>
                        <option value="grade2">B</option>
                        <option value="grade3">C</option>
                        <option value="grade4">D</option>
                        <option value="grade5">E</option>
                        <option value="grade6">F</option>
                    </select>

                    <li for="name">Class Teacher:</li>
                    <select id="name" name="name">
                        <option value="grade1" placeholder='-SELECT-'></option>
                    </select>
                    
                </ul>
                <input type="submit" value="Submit" />
            </form>

            {props.children}
            </div>
        </div>
    ) : "";
}

export default classPopup
