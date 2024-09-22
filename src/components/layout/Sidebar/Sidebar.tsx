import React from 'react';
import './Sidebar.css';
import ProfileLinks from '../../common/Links/ProfileLinks/ProfileLinks';

const Sidebar:React.FC = () => {
    return (
        <div className="sidebar">
            <ProfileLinks />
        </div>
    );
};

export default Sidebar;
