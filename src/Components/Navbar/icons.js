import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const icons = () => {
    return (
        <div>

           <li className="dropdown" style={{listStyleType:'none',textDecoration:'none'}}>
            <a href="javascript:void(0)" className="dropbtn"><AccountCircleIcon /></a>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </li>
             
        </div>
    )
}

export default icons
