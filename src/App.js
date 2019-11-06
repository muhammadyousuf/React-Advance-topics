
import ButtonClick from './button.js';
import Accessibility from './components/Accessibility';
import React, { Suspense} from 'react';
const Calculator = React.lazy(() => import('./components/code-spliting'));


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
        <Suspense fallback={<div>Loading...</div>}>
        <Calculator />
        </Suspense>
      </div>
    );
  }
  
}

export default App;
