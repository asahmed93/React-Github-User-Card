import React from "react"

function Card(props){

    return (
        <div>
            <h1>{props.data.name} - {props.data.login}</h1>
            <img src={props.data.avatar_url} alt="profile picture"/><br/>
            <a target="_blank" href={props.data.html_url}>Profile Link</a>
            <p>Followers: {props.data.followers} Following: {props.data.following}</p>
            <p><strong>{props.data.bio}</strong></p>
        </div>
    )
} 

export default Card