import { Event } from '@fizz6/strife-common';
import { Entity } from '@fizz6/strife-common';

export class RenderEvent extends Event {
    dt: Number;
    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    public constructor(dt: Number,
                       canvas: HTMLCanvasElement,
                       context: CanvasRenderingContext2D,
                       entity?: Entity) {
        super(entity);
        this.canvas = canvas;
        this.context = context;
        this.dt = dt;
    }
}
