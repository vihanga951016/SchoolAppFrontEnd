import React from 'react'
import './sidebar.css'



import {SidebarData} from './SidebarData'

function sidebar() {
    return (
        
        <div className='sidebar-wrapper'>
            <ul className='sidebar-list'>
                {SidebarData.map((val, key) => 
                    {
                        return (
                            <li className='row' id={window.location.pathname === val.link ? "active" : ""}
                             key={key} onClick={() => {window.location.pathname = val.link}}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>
                                    {val.title}
                                </div>
                            </li>
                        )
                    }    
                )}
            </ul>
        </div>
    )
}
export default sidebar;