import React from 'react'
import "./Header.css"
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutLineIcon from '@material-ui/icons/Help'
import {useStateValue} from '../StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header-left">
                <Avatar className="header-avatar" alt={user?.displayName} src={user?.photoURL}></Avatar>
                <AccessTimeIcon />
            </div>
            <div className="header-search">
                <SearchIcon />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-right">
                <HelpOutLineIcon />
            </div>
        </div>
    )
}

export default Header
