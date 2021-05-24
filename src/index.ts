class PubSub<validParams> {
	protected readonly eventSubscribers: Set<(arg: validParams) => void> = new Set();

	subscribe(fn: (event: validParams) => any): void {
		this.eventSubscribers.add(fn);
	}

	unsubscribe(fn: (event: validParams) => any): void {
		this.eventSubscribers.delete(fn);
	}

	publish(event: validParams): void {
		this.eventSubscribers.forEach((fn) => fn(event));
	}
}
export { PubSub };
