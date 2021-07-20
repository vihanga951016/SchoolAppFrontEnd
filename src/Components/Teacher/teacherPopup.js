import React from 'react'
import './teacher.css'

import { useState } from 'react'


function TeacherPopup(props){

    const [teacherId, setId] = useState(null)
    const [name, setName] = useState('')
    const [teacherIndex, setIndex] = useState(null)
    const [nic, setNic] = useState('')
    const [phone, setphone] = useState(null)
    const [address, setAddress] = useState('')
    const [type, setType] = useState('')
    const [priviladge, setPriviladge] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        props.onAdd({teacherId,name,teacherIndex,nic,phone,address,type,priviladge,username,password})

        setId(null)
        setName('')
        setIndex(null)
        setNic('')
        setphone(null)
        setAddress('')
        setType('')
        setPriviladge(false)
        setUsername('')
        setPassword('')

        props.setTrigger(false)

    }

    return (props.trigger) ? (
        <div className='popup-teacher'>
            <div className='popup-inner-teacher'>
            <h2>Add a new admin</h2>
            <button style={{background:'red'}} className='close-btn' onClick={() => props.setTrigger(false)}>X</button>

            <form>
                <ul style={{listStyleType:'none',marginTop:'10px'}}>

                    <li>Name:</li>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />

                    <li>Index:</li>
                    <input type="text" id="index" value={teacherIndex} onChange={(e) => setIndex(e.target.value)} placeholder="Index" />

                    <li>NIC:</li>
                    <input type="text" id="nic" value={nic} onChange={(e) => setNic(e.target.value)} placeholder="NIC" />

                    <li>Phone:</li>
                    <input type="text" id="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone Number" />

                    <li>Address:</li>
                    <input type="text" id="addrss" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />

                    {/* <li>Type:</li>
                    <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" /> */}

                    <li>Type:</li>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option>-SELECT-</option>
                        <option value="teacher">Teacher</option>
                        <option value="hod">HOD</option>
                        <option value="principle">Principle</option>
                    </select>

                    {/* <li>Priviladge:</li>
                    <input type="text" id="priviladge" value={priviladge} onChange={(e) => setPriviladge(e.target.value)} placeholder="Priviladge" /> */}

                    <li>Priviladgers:</li>
                    <div className='form-control form-control-check'>
                        <input type='checkbox' value={priviladge} checked={priviladge} onChange={(e) => setPriviladge(e.currentTarget.checked)}/>
                    </div>

                    <li>Username:</li>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />

                    <li>Password:</li>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <br/>

                    {/* <li for="confirm">Confirm Password:</li>
                    <input type="password" id="password" name="confirm" placeholder="Confirm Password" /> */}
                    
                </ul>
                <input style={{marginLeft:'39px',width:'537px'}} type="submit" value="Submit" onClick={onSubmit} />
            </form>

            {props.children}
            </div>
        </div>
    ) : "";
}

export default TeacherPopup
