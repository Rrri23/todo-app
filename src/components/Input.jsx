import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';


function Input(props){
   const [item, setItem] = useState("");

   const handleChange = (event) => {
       let text = event.target.value;
       setItem(text);
      
   }

   const submitOnEnter = (event) =>{
        props.newTodo(item);
        setItem(""); 
        event.preventDefault();
   }

    return (
        <div className="input-box">
        <form onSubmit={submitOnEnter} autoComplete="off">  
       <Checkbox 
           style={{
            color: "rgb(139, 135, 139)",           
            }}
            disableRipple={true}
            disabled={true}
            checked={false}
            size="small"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
       />
        <input type="text" id="input" className="input-field" value={item} onChange={handleChange} ></input>
        </form>
        </div>

    )
}

export default Input;