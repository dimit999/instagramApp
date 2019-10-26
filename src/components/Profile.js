import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
                <User 
                    src="https://instagram.fauh1-1.fna.fbcdn.net/vp/1d8ce37a6e31a7f905fc5881454c7fbf/5E440872/t51.2885-15/e35/64859001_153255815812127_1644006275532237598_n.jpg?_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=111"
                    alt="man"
                    name="Dmitry Ananyev"/>
            <Palette/>
        </div>
    )
}
export default Profile;