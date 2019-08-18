import React from "react";
import { Optional } from '@fizz6/strife/src/Optional';
import { Dispatcher } from '@fizz6/strife-common';
import { Scene, Entity } from '@fizz6/strife-common';
import { UpdateEvent } from '../events/UpdateEvent';
import { RenderEvent } from '../events/RenderEvent';
import { Player } from './Player';
import { Input } from './Input';
import "./App.css";

export default class App extends React.Component {
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  scene: Scene = new Scene();

  static rootEntity: Entity | null = null;
  static get root(): Entity {
      if (App.rootEntity) {
          return App.rootEntity;
      }
      throw "Initialization not finished";
  }
  static get input(): Input {
      let input: Optional<Input> = App.root.components.get(Input);
      if (input) {
          return input;
      }
      throw "Initialization not finished";
  }

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
      this.scene.components.register(Input);
      let playerEntity = this.scene.entities.add();
      let player = playerEntity.components.add(Player);

      App.rootEntity = this.scene.entities.add();
      let input = App.rootEntity.components.add(Input);

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
