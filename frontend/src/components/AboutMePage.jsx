import React from 'react';
import ProfileImage from './ProfileImage';

function AboutMePage() {
    return (
    <div className='AboutMePage'>
        <header className='app-header'>
        <h1 style={{ fontSize: '60px', position:'relative', marginLeft: '470px', top: '-20px', fontWeight:'bold'}}>
        About the developer
        </h1>
        </header> 
        <ProfileImage alt="Rachael Moseley" width="200px" height="200px" />
        <h4 style={{marginLeft: '400px'}}>Bonjour! Welcome to my web application. My name is Rachael Moseley!</h4>
        <h4 style={{marginLeft: '300px'}}>My intention for creating this, was to allow users to find information </h4>
        <h4 style={{marginLeft: '400px'}}>about the water quality from lakes or ponds in India!...</h4>
    </div>
    );
}

export default AboutMePage;