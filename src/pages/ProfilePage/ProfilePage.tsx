import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
    return (
        <MainTemplate>
            <div className="profile-page">
                <Sidebar /> 
                <div className='profile-page-content'>
                    <Outlet />
                </div>
            </div>
        </MainTemplate>
    );
};

export default ProfilePage;
