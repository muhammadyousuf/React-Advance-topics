import React from 'react';
import ButtonClick from './button.js';
import Accessibility from './components/Accessibility';

class App extends React.Component {
 handleClick = () => {
    alert('hello world')
  }
  render(){
    return (
      <div >
        <button onClick={() => {document.getElementById("btn_id").click() }} >Zoom</button>
        <ButtonClick  />
        <Accessibility />
      </div>
    );
  }
  
}

export default App;
