import React from 'react'
import './SidebarOption.css'
import { useNavigate } from 'react-router-dom';
import db from '../../../firebase';

function SidebarOptions({ Icon, title, id, addChannelOption }) {
    const navigate = useNavigate();
    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`)
        } else {
            navigate(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if(channelName){
            db.collection('room').add({
                name: channelName,
            })
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
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
