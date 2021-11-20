import React from 'react';
import "./Sidebar.css";
import FiverManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2>Gaurav</h2>
                    <h3>
                        <FiverManualRecordIcon />
                        Gaurav
                    </h3>
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
