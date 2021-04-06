import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { withStyles } from '@material-ui/core/styles';

function Item(props){

    function handleChange(){
        props.taskDone(props.task);
        
    }

    function handleDelete(){
        props.deleteOne(props.task);
    }
    return (
        <div className="item input-box" id={props.itemNumber}>         
            <Checkbox 
                style={{
                    color: "#73BDFF",         
                    }}
                    size="medium"
                    checked={props.checked}
                    onClick={handleChange}
                    id={props.idCheckbox}
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}          
            />
           
              <input type="text" id={"input-" + props.task} className="input-field" style={props.setStyle} value={props.content}  readOnly></input>  
              <button type="button" className="cross-button" onClick={handleDelete} >
                    <div className="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>  
                    </div>
              </button> 
            </div>
    )
}

export default Item;