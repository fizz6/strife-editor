import React from "react";
import { Dispatcher } from '@fizz6/strife-common';
import { UpdateEvent } from '../events/UpdateEvent'
import "./App.css";

export default class App extends React.Component {
  state = {
    x: 0
  };

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  dispatcher: Dispatcher = new Dispatcher();

   mainLoop = () => {
    window.requestAnimationFrame(this.mainLoop);

    this.dispatcher.emit(new UpdateEvent(.05));

    this.dispatcher.dispatch();
  }

  componentDidMount = () => {
      this.dispatcher.on(UpdateEvent)((event: UpdateEvent): void => {
          this.state.x += .1;
          if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'green';
            this.ctx.fillRect(this.state.x, 10, 150, 100);
          }
      });
      this.mainLoop();
  }

  render() {
    return (
      <div className="component-app">
        Welcome to the wonderous world of <i>Strife</i><br/>
        <button onClick={this.mainLoop} >Add Todo</button><br/>
        <canvas ref={c => {
            this.canvas = c;
            if (c) {
                this.ctx = c.getContext('2d') as CanvasRenderingContext2D;
            } else {
                this.ctx = null;
            }
        }} id="canvas"></canvas>
      </div>
    );
  }
}
