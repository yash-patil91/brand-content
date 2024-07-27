// ProfileContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProfileContext = createContext();

export const useProfile = () => {
    return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type');

    const fetchProfileData = async () => {
        try {
            const endpoint = type === 'brand'
                ? 'http://localhost:5000/api/brands/profile'
                : 'http://localhost:5000/api/influencers/profile';

            const response = await axios.get(endpoint, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProfileData(response.data);
            localStorage.setItem('id', response.data._id)
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    useEffect(() => {
        if (token && type) {
            fetchProfileData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, type]);

    return (
        <ProfileContext.Provider value={profileData}>
            {children}
        </ProfileContext.Provider>
    );
};
