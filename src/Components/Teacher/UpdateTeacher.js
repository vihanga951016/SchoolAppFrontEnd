import React from 'react'
import { useState , useEffect} from 'react'


const UpdateTeacher = (props) => {
    console.log(props.onUpdateid)
    // const [teachers, setTeachers] = useState([])

    let teacherId = props.onUpdateid;

    const [names, setName] = useState("")

    console.log(names)

    useEffect(() => {    
        
        const fetchTeacher = () => {
            if(teacherId === 0){
                console.log("Aaaa")
            }else{
            
            fetch(`http://localhost:8000/teachers/${teacherId}`)
            .then(res => res.json())
            .then(
                result => {
                    
                    console.log(result)
                    setName(result?.name)
                    
                }
            )
            }
           
        }
        
    
    fetchTeacher()
        
    }, [teacherId])

    

    

    // const [teacherIndex, setIndex] = useState(null)
    // const [nic, setNic] = useState('')
    // const [phone, setphone] = useState(null)
    // const [address, setAddress] = useState('')
    // const [type, setType] = useState('')
    // const [priviladge, setPriviladge] = useState(false)
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     props.onAdd({teacherId,name,teacherIndex,nic,phone,address,type,priviladge,username,password})

        
    //     setName('')
    //     setIndex(null)
    //     setNic('')
    //     setphone(null)
    //     setAddress('')
    //     setType('')
    //     setPriviladge(false)
    //     setUsername('')
    //     setPassword('')

    //     props.setTrigger(false)

    // }
    return (props.trigger) ? (
        <div className='popup-teacher'>
            <div className='popup-inner-teacher'>
            <h2>Update Teacher</h2>
            <button style={{background:'red'}} className='close-btn' onClick={() => props.setTrigger(false)}>X</button>

            <form>
                <ul style={{listStyleType:'none',marginTop:'10px'}}>

                    <li>Name:</li>
                    <input type="text" id="name" value={names} placeholder="Name" />

                    <li>Index:</li>
                    <input type="text" id="index" placeholder="Index" />

                    <li>NIC:</li>
                    <input type="text" id="nic" placeholder="NIC" />

                    <li>Phone:</li>
                    <input type="text" id="phone" placeholder="Phone Number" />

                    <li>Address:</li>
                    <input type="text" id="addrss" placeholder="Address" />

                    {/* <li>Type:</li>
                    <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" /> */}

                    <li>Type:</li>
                    <select id="type" >
                        <option>-SELECT-</option>
                        <option value="teacher">Teacher</option>
                        <option value="hod">HOD</option>
                        <option value="principle">Principle</option>
                    </select>

                    {/* <li>Priviladge:</li>
                    <input type="text" id="priviladge" value={priviladge} onChange={(e) => setPriviladge(e.target.value)} placeholder="Priviladge" /> */}

                    <li>Priviladgers:</li>
                    <div className='form-control form-control-check'>
                        <input type='checkbox' />
                    </div>

                    <li>Username:</li>
                    <input type="text" id="username" placeholder="username" />

                    <li>Password:</li>
                    <input type="password" id="password" placeholder="Password" />
                    <br/>

                    {/* <li for="confirm">Confirm Password:</li>
                    <input type="password" id="password" name="confirm" placeholder="Confirm Password" /> */}
                    
                </ul>
                <input style={{marginLeft:'39px',width:'537px'}} type="submit" value="Submit" />
            </form>

            {props.children}
            </div>
        </div>
    ) : "";
}

export default UpdateTeacher
