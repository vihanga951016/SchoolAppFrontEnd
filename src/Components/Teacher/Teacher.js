import React from 'react'
import './teacher.css'
import { useState , useEffect} from 'react'
import Popup from './teacherPopup'
import UpdateTeacherPopup from './UpdateTeacher'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import DeleteIcon from '@material-ui/icons/Delete';

const Teacher = () => {

    const [buttonPopup, setbuttonPopup] = useState(false);
    const [updateButtonPopup, setUpdateButtonPopup] = useState(false);
    const [teacher, setTeacher] = useState([])
    const [teacherId, setTeacherId] = useState(0);
    const [UpdateTeacher, setUpdateTeacher] = useState({})

    // const handleChange = (teacher) => {
    //     setTeacher(teacher.target.teacherId)
    // }

    

    useEffect(() => {
        // fetch('http://localhost:8000/teachers')
        // .then(res => res.json())
        // .then(res => setTeacher(res))

        const getTeacher = async () => {
            const teacherFromServer = await fetchTeacher()
            setTeacher(teacherFromServer)
        }

        getTeacher()
    },[]);

    const fetchTeacher = async () => {
        const res = await fetch('http://localhost:8000/teachers/show')
        const data = await res.json()

        return data
    }


    const addTeacher = async (teachers) => {
        const res = await fetch('http://localhost:8000/teachers/addnew' , {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(teachers)
        })

        const data = await res.json()
        setTeacher([...teacher, data])

    }

    const updateTeacher = async (id) => {
        const res = await fetch(`http://localhost:8000/teachers/${teacherId}/update` , {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })

        const data = await res.json()
        setUpdateTeacher([...UpdateTeacher, data])
    }

    const deleteTeacher = async (id) => {
        await fetch(`http://localhost:8000/teachers/${teacherId}/delete` , {
            method: 'DELETE',
        })
        
        setTeacher(teacher.filter((teacher) => teacher.teacherId !== id))
    }

    const getTeacherId =  (id) =>{
        setUpdateButtonPopup(true)
        setTeacherId(id)
        // const data = await res.json()
        // setTeacherupdate([...teacher, data])
    }

    return (
        <div className='content'>
            <h3>Add Teacher</h3>
            <button onClick={() => setbuttonPopup(true)} type="button" className="btn btn-info m-2">Add Teacher</button>
            <div className='table-content'>
            <table className="table mt-3">
            <thead className="thead-dark">
                <tr>
                <th scope="col" style={{textAlign:'center'}}>id</th>
                <th scope="col" style={{textAlign:'center'}}>Name</th>
                <th scope="col" style={{textAlign:'center'}}>Index</th>
                <th scope="col" style={{textAlign:'center'}}>NIC</th>
                <th scope="col" style={{textAlign:'center'}}>phone</th>
                <th scope="col" style={{textAlign:'center'}}>Address</th>
                <th scope="col" style={{textAlign:'center'}}>Type</th>
                <th scope="col" style={{textAlign:'center'}}>Previlagders</th>
                <th scope="col" style={{textAlign:'center'}}>action</th>
                </tr>
            </thead>
            <tbody>

            {teacher.map(teacher=>
                <tr>
                <td style={{textAlign:'center'}} key={teacher.teacherId}>{teacher.teacherId}</td>
                <td style={{textAlign:'center'}}>{teacher.name}</td>
                <td style={{textAlign:'center'}}>{teacher.teacherIndex}</td>
                <td style={{textAlign:'center'}}>{teacher.nic}</td>
                <td style={{textAlign:'center'}}>{teacher.phone}</td>
                <td style={{textAlign:'center'}}>{teacher.address}</td>
                <td style={{textAlign:'center'}}>{teacher.type}</td>
                <td style={{textAlign:'center'}}>{teacher.priviladge}</td>
                <td style={{textAlign:'center'}}>
                    <button onClick={() => getTeacherId(teacher.teacherId)} type="button" className="btn btn-warning"><SystemUpdateAltIcon /></button>
                    {/* <button type="button" className="btn btn-warning"><SystemUpdateAltIcon /></button> */}
                    <button onClick={() => deleteTeacher()} type="button" className="btn btn-danger ml-2"><DeleteIcon /></button>    
                </td>
            </tr>)}


            </tbody>
            </table>
       
        </div>
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup} onAdd={addTeacher} />
        <UpdateTeacherPopup trigger={updateButtonPopup} setTrigger={setUpdateButtonPopup} onUpdateid={teacherId} onUpdate={updateTeacher}/>
        </div>
    )
}

// const Tr = ({teacher}) => {
//     return(
//         <tr>
//             <td style={{textAlign:'center'}}>{teacher.teacherId}</td>
//             <td style={{textAlign:'center'}}>{teacher.name}</td>
//             <td style={{textAlign:'center'}}>{teacher.teacherIndex}</td>
//             <td style={{textAlign:'center'}}>{teacher.nic}</td>
//             <td style={{textAlign:'center'}}>{teacher.phone}</td>
//             <td style={{textAlign:'center'}}>{teacher.address}</td>
//             <td style={{textAlign:'center'}}>{teacher.type}</td>
//             <td style={{textAlign:'center'}}>{teacher.priviladge}</td>
//             <td style={{textAlign:'center'}}>
//                 <button type="button" className="btn btn-warning">Update</button>
//                 <button type="button" className="btn btn-danger ml-2">Delete</button>    
//             </td>
//         </tr>
//     )
// }

export default Teacher
