import React from "react"

function Card(props){
    console.log(props.data)
    return (
        <div>
            <div>
                <h1>Git Hub User:</h1>
                <h1>{props.data.name} - {props.data.login}</h1>
                <img src={props.data.avatar_url} alt="profile picture"/><br/>
                <a target="_blank" href={props.data.html_url}>Profile Link</a>
                <p>Followers: {props.data.followers} Following: {props.data.following}</p>
                <p><strong>{props.data.bio}</strong></p>
            </div>
        </div>
    )
} 

export default Card