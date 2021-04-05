import React from 'react';

function BackgroundImg(props){
    return(
        <div className="background-image">  
        {props.status ? <img src="./images/bg-desktop-dark.jpg" alt="dark picture" /> :<img src="./images/bg-desktop-light.jpg" alt="light picture" />}
        </div>
    )
}

export default BackgroundImg;
