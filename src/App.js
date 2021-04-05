import React, {useState} from "react";
import BackgroundImg from "./components/BackgroundImg";
import List from "./components/List";
import Title from './components/Title';

function App(props) {
  const [theme, setTheme] = useState(true); //true = dark theme, false = light theme

  function chgTheme(){
    setTheme(!theme);
    let head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');
    link.rel = 'stylesheet';     
    link.type = 'text/css';
    if(!theme){
      link.href = "./styles/darkstyles.css"
    }else{
      link.href = "./styles/lightstyles.css"
    };
    head.appendChild(link);
  }

  return (
    <div className="App">
        <BackgroundImg status={theme} />      
        <List changeTheme={chgTheme} nightDay={theme} />
    </div>
  );
}

export default App;




{/* <div class="new-task">
<h1 class="header">TODO</h1>
<div id="to-do-list">
</div>
<input type="text" placeholder="new task...">
</div> */}
