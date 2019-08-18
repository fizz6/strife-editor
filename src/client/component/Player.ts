import { Component, Entity } from '@fizz6/strife-common';
import { Optional } from '@fizz6/strife/src/Optional';
import Vector2 from '@fizz6/strife-math/src/Vector2';
import { UpdateEvent } from '../events/UpdateEvent';
import { RenderEvent } from '../events/RenderEvent';
import Serialization from '@fizz6/serialization';
import App from './App';
import { Input } from './Input';

@Serialization.type
export class Player extends Component {
    position: Vector2;
    speed: Vector2;

    constructor(entity: Entity) {
        super(entity);
        this.position = Vector2.Zero;
        this.speed = Vector2.Zero;
    }

    @Component.On(UpdateEvent)
    update(event: UpdateEvent): void {
        this.speed = Vector2.Zero;
        if (App.input.pressedKeys.get('ArrowLeft')) {
            this.speed.add(new Vector2(-1, 0));
        }
        if (App.input.pressedKeys.get('ArrowRight')) {
            this.speed.add(new Vector2(1, 0));
        }
        if (App.input.pressedKeys.get('ArrowUp')) {
            this.speed.add(new Vector2(0, -1));
        }
        if (App.input.pressedKeys.get('ArrowDown')) {
            this.speed.add(new Vector2(0, 1));
        }
        this.position.add(this.speed);
    }

    @Component.On(RenderEvent)
    render(event: RenderEvent) {
        event.context.clearRect(0, 0, event.canvas.width, event.canvas.height);
        event.context.fillStyle = 'green';
        event.context.fillRect(this.position.x, this.position.y, 50, 50);
    }
}
