import React from "react"

const Followers = props =>{
    console.log(props.data)
    return(
        <div>
            <h2>Followers:</h2>
            {props.data.map(item => {
                return (
                <div key={item.id} className="followersDiv">
                    <h3>username: {item.login}</h3> 
                    <img src={item.avatar_url} alt="followers pic"/><br/>
                    <a href={item.html_url} target="_blank">Click to Profile</a>
                </div>
            )})}
        </div>
    )
}

export default Followers