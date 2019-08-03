import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";


ReactDOM.render(<App />, document.getElementById("strife-editor"));

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
let x = 0;
(() => {
  const main = () => {
    window.requestAnimationFrame( main );

    x += .1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(x, 10, 150, 100);
  }

  main(); // Start the cycle
})();
