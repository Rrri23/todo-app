import React from "react";

function Checkbox_selfmade(props){
    function handleChange(){
        props.taskDone(props.task);   
    }
    return (
        <div class="container">
        <div class="round">
            
          <input type="checkbox" id="checkbox"  checked={props.checked}
            onClick={handleChange}
            id={props.idCheckbox}/>
          <label for="checkbox"></label>
        </div>
      </div>
    )
}

export default Checkbox_selfmade;