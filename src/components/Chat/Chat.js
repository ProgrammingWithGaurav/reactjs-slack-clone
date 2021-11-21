import React, {useEffect, useState} from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(()=> {
        if(roomId){
            db.collection('room')
            .doc(roomId)
            .onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
    }, [])

    return (
        <div className="chat">
            <div className="chat-header">
                <h4 className="chat-headerLeft">
                    <div className="chat-channelName">
                        <strong>#{roomDetails.name}</strong>
                        <StarBorderOutlinedIcon />
                    </div>
                </h4>
                <div className="chat-headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
