import React, {useState} from "react";
import Input from "./Input";
import Item from "./Item";
import Navbar from "./Navbar";
import Title from './Title';


function List(props) {
   const [listItems, setListItems] = useState([]);
   const [showcase, setShowcase] = useState({
       all: true,
       active: false,
       completed: false,
   });

const stylesDoneTask = {
    textDecoration: "line-through",
    color: "rgb(139, 135, 139)"
}

    const ids = {
        all: "all-button",
        active: "active-button",
        completed: "complete-button",
    }

   function allFunc(event){
       setShowcase({
        all: true,
        active: false,
        completed: false,
       });
       let id = ids.all;
       document.getElementById(ids.completed).classList.remove("choice-button-on");
       document.getElementById(ids.active).classList.remove("choice-button-on");
       document.getElementById(id).classList.add("choice-button-on");

   }
   function activeFunc(){
    setShowcase({
     all: false,
     active: true,
     completed: false,
    });
    let id = ids.active;
    document.getElementById(ids.completed).classList.remove("choice-button-on");
    document.getElementById(ids.all).classList.remove("choice-button-on");
    document.getElementById(id).classList.add("choice-button-on");
}
function complFunc(){
    setShowcase({
     all: false,
     active: false,
     completed: true,
    });
    let id = ids.completed;
    document.getElementById(ids.all).classList.remove("choice-button-on");
    document.getElementById(ids.active).classList.remove("choice-button-on");
    document.getElementById(id).classList.add("choice-button-on");
}
   function func(e) {
        setListItems(prevValue => {
            return [
                ...prevValue,
                {
                    item: e,
                    status: false,
                }
            ];
        });
    }
    const onClickedItem = (task) => {
        setListItems(prevValue => {
            return prevValue.map((obj, index, arr) => {
                if(index === task){
                    console.log(arr);
                    return {
                        item: obj.item,
                        status: !obj.status,
                    };
                }else{
                    return obj
                }
            })
        }); 
            
    }

   function clearDoneFunc(){
        setListItems(prevValue => {
          return prevValue.filter(e => !e.status);
        });
        setShowcase({
            all: true,
            active: false,
            completed: false,
        });
        let id = ids.all;
        document.getElementById(ids.completed).classList.remove("choice-button-on");
        document.getElementById(ids.active).classList.remove("choice-button-on");
        document.getElementById(id).classList.add("choice-button-on");
   }

   function deleteOneFunc(task){
       setListItems(prevValue => {
           return prevValue.filter((item, index) => index !== task)
       })
   } 

  return (

    <div className="List">  
        <Title changeTheme={props.changeTheme} dayNight={props.nightDay} />
        <Input newTodo={func} />

        <div className="todo-list">
            {/* <Item content="Dummy"/> */}
            {showcase.all ? listItems.map((content, index) => {
                return (
                    <Item 
                        key={index}
                        id={"to-do-" + index}
                        content={content.item}
                        itemNumber={"item-" + index}
                        task={index}
                        taskDone={onClickedItem}
                        checked={content.status}
                        idCheckbox={"checkbox-" + index}
                        setStyle={content.status ? stylesDoneTask : {}}
                        deleteOne={deleteOneFunc}
                    />
                );
            })
            : showcase.active ? listItems.map((content, index) => {
               if(!content.status){
                return (
                    <Item 
                        key={index}
                        id={"to-do-" + index}
                        content={content.item}
                        itemNumber={"item-" + index}
                        task={index}
                        taskDone={onClickedItem}
                        checked={content.status}
                        idCheckbox={"checkbox-" + index}
                        setStyle={content.status ? stylesDoneTask : {}}
                        deleteOne={deleteOneFunc}
                    />
                );
               } 
            })
            :  listItems.map((content, index) => {
               if(content.status){
                return (
                    <Item 
                        key={index}
                        id={"to-do-" + index}
                        content={content.item}
                        itemNumber={"item-" + index}
                        task={index}
                        taskDone={onClickedItem}
                        checked={content.status}
                        idCheckbox={"checkbox-" + index}
                        setStyle={content.status ? stylesDoneTask : {}}
                        deleteOne={deleteOneFunc}
                    />
                );
               } 
            })
            }
            <Navbar 
            leftItems={listItems.filter(e => e.status === false).length}
            allTasksFunc={allFunc}
            activeTasksFunc={activeFunc}
            completedTasksFunc={complFunc}
            deleteDone={clearDoneFunc}           
             />
        </div>
    </div>
  );
}

export default List;