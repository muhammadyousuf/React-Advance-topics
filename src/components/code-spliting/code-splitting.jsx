import React, { Component } from "react";
//import {add} from '../../helper/math/add'
import { Stage, Layer, Rect } from "react-konva";
import './main.css'
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0,
      x: 200,
      y: 200,
      stageScale: 0
    };
  }
  handleZoom = zoom => {
    const scaleBy = 1.04;
    const stage = this.canvasRef.current.getStage();

    const oldScale = stage.scaleX();
    console.log("oldScale", oldScale);

    var mousePointTo = {
      x: stage.width() / 2 / oldScale - stage.x() / oldScale,
      y: stage.height() / 2 / oldScale - stage.y() / oldScale
    };

    var newScale;

    if (zoom === "zoom-In") {
      newScale = oldScale * scaleBy;
    } else {
      newScale = oldScale / scaleBy;
    }

    var newPos = {
      x: -(mousePointTo.x - stage.x() / 2 / newScale) * newScale,
      y: -(mousePointTo.y - stage.y() / 2 / newScale) * newScale
    };
    //  let percentage = (newScale / scaleBy) * 100;
    // percentage = percentage.toFixed(0);
    //  stage.position(newPos)
    // stage.batchDraw();
    console.log(newPos);
    //   if (percentage <= 1000 && percentage >= 20) {
    this.setState({
      x: newPos.x,
      y: newPos.y,
      stageScale: newScale
      // percentage: percentage,
    });
    //  }
  };
  render() {
    return (
      <div>
         <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>%</button>
                <button>C</button>
                <button>=</button> 
        <div clas="container-main-div" >
          <Stage
            ref={this.canvasRef}
            draggable={true}
            className="stage-styling"
            x={this.state.x}
            y={this.state.y}
            width={500}
            height={500}
            scaleX={this.state.stageScale}
            scaleY={this.state.stageScale}
          >
            <Layer>
              <Rect
                x={500}
                y={500}
                width={200}
                height={200}
                stroke="green"
                strokeWidth={2}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}
