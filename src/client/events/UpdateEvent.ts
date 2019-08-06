import { Event } from '@fizz6/strife-common';
import { Entity } from '@fizz6/strife-common';

export class UpdateEvent extends Event {
    dt: Number;

    public constructor(dt: Number, entity?: Entity) {
        super(entity);
        this.dt = dt;
    }
}
