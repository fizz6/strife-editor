import { Component, Entity } from '@fizz6/strife-common';
import Vector2 from '@fizz6/strife-math/src/Vector2';
import { UpdateEvent } from '../events/UpdateEvent';
import { RenderEvent } from '../events/RenderEvent';

export class Player extends Component {
    position: Vector2;

    constructor(entity: Entity) {
        super(entity);
        this.position = Vector2.Zero;
    }

    @Component.On(UpdateEvent)
    update(event: UpdateEvent): void {
        this.position.x+=.05;
    }

    @Component.On(RenderEvent)
    render(event: RenderEvent) {
        event.context.clearRect(0, 0, event.canvas.width, event.canvas.height);
        event.context.fillStyle = 'green';
        event.context.fillRect(this.position.x, 10, 150, 100);
    }
}
