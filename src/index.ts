export class PubSub<validParams> {
	private eventSubscribers: Set<(arg: validParams) => void> = new Set();
	subscribe(fn: (event: validParams) => void) {this.eventSubscribers.add(fn);}
	unsubscribe(fn: (event: validParams) => void) {this.eventSubscribers.delete(fn);}
	publish(event: validParams) {return this.eventSubscribers.forEach((fn) => fn(event));}
}