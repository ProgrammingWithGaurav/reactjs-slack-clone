import React from 'react'
import './SidebarOption.css'

function SidebarOptions({ Icon, title }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption-channel"><span className="sidebarOption-hash"># {title}</span></h3>
            )}
        </div>
    )
}

export default SidebarOptions
