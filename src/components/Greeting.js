import React from 'react';

function UserProfile(props){
    return (
    <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Location: {props.location}</p>
    </div>
    );
}

export default UserProfile;