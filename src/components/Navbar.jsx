import React from 'react';

function Navbar(props){
    function clearDoneFunc(){
        props.deleteDone()
    }
    return (
        <div className="item input-box navbar">
            <div className="nav-container">
                <p>{props.leftItems} items left</p>
                <div className="middle-container">
                    <button className="choice-button" id="all-button" onClick={props.allTasksFunc}>All</button>
                    <button className="choice-button" id="active-button" onClick={props.activeTasksFunc}>Active</button>
                    <button className="choice-button" id="complete-button" onClick={props.completedTasksFunc}>Completed</button>
                </div>

                <button className="choice-button" onClick={clearDoneFunc}>Clear Completed</button>
            </div>
          
        </div>
    )
}

export default Navbar;