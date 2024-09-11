import React from 'react';

function UserProfile(props){
    return <h1>Name: {props.name}<br/> Age: {props.age}<br/> Location: {props.location}</h1>;
}

export default UserProfile;