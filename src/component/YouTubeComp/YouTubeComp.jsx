import React from 'react'
import './YouTubeComp.css';

const YouTubeComp = (props) =>{
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV5rvwIByA5zuXcJRFk9Tu3WyAwJ-VZvM3vw&usqp=CAU" alt="" className="src"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps ={
    time : '20.22',
    title : 'apa itu thumbnai?',    
    desc : 'ini desc'
}

export default YouTubeComp;