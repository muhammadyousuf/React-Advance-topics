import React from 'react';
import ButtonClick from './button.js';
import Accessibility from './components/Accessibility';


const items = [{"id":1,"term":'Nonu', "description":"data language"}]
class App extends React.Component {
 handleClick = () => {
    alert('hello world')
  }
  render(){
    return (
      <div >
        <button onClick={() => {document.getElementById("btn_id").click() }} >Zoom</button>
        <ButtonClick  />
        <Accessibility items={items} />
      </div>
    );
  }
  
}

export default App;
