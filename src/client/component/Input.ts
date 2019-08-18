import { Component, Entity } from '@fizz6/strife-common';
import Vector2 from '@fizz6/strife-math/src/Vector2';
import { UpdateEvent } from '../events/UpdateEvent';
import { RenderEvent } from '../events/RenderEvent';
import Serialization from '@fizz6/serialization';

@Serialization.type
export class Input extends Component {
    pressedKeys: Map<string, boolean>;
    inputNames: Map<string, string>;

    constructor(entity: Entity) {
        super(entity);
        this.pressedKeys = new Map();
        this.inputNames = new Map();

        window.addEventListener("keydown", (event: KeyboardEvent) => {
            this.pressedKeys.set(event.code, true);
        });
        window.addEventListener("keyup", (event: KeyboardEvent) => {
            this.pressedKeys.set(event.code, false);
        });
    }
}
