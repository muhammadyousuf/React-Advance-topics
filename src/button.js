import React from 'react';


class ButtonClick extends React.Component {
 handleClick = () => {
    alert('hello world Button')
  }
  render(){
    return (
      <div >
        <button style={{display:'none'}} id="btn_id" onClick={this.handleClick} >Zoom Button</button>
      </div>
    );
  }
  
}

export default ButtonClick;
