import React from "react";
import { Dispatcher } from '@fizz6/strife-common';
import { Scene } from '@fizz6/strife-common';
import { UpdateEvent } from '../events/UpdateEvent';
import { RenderEvent } from '../events/RenderEvent';
import { Player } from './Player';
import "./App.css";

export default class App extends React.Component {
  state = {
    x: 0
  };

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  scene: Scene = new Scene();

   mainLoop = () => {
    window.requestAnimationFrame(this.mainLoop);

    this.scene.dispatcher.emit(new UpdateEvent(.05));
    if (this.ctx && this.canvas) {
        this.scene.dispatcher.emit(new RenderEvent(.05, this.canvas, this.ctx));
    }

    this.scene.dispatcher.dispatch();
  }

  componentDidMount = () => {
      this.scene.components.register(Player);
      Player.Initialize(this.scene);
      let playerEntity = this.scene.entities.add();
      let player = playerEntity.components.add(Player);
      this.scene.dispatcher.on(UpdateEvent)((event: UpdateEvent): void => {
          this.state.x += .1;
          if (this.ctx && this.canvas) {
            
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
