/** A type safe implementation of the observer pattern
 * @type  {validParams} the type that the pubsub will handle
 */
class PubSub<validParams> {
	readonly eventSubscribers: Set<(arg: validParams) => unknown> = new Set();

	/** Adds a function that accepts the pubsub parameters to the subscriber list
	 * @param  {(event:validParams)=>unknown} fn
	 * @returns {Function} unsubscribe function
	 */
	subscribe(fn: (event: validParams) => unknown): () => void {
		this.eventSubscribers.add(fn);
		return () => {
			this.unsubscribe(fn);
		};
	}

	/** Unsubscribes the given function from the pubsub
	 * @param  {(event:validParams)=>unknown} fn a function that was subscirbed to this pubsub
	 * @returns {boolean} Deletion success status
	 */
	unsubscribe(fn: (event: validParams) => unknown): boolean {
		return this.eventSubscribers.delete(fn);
	}

	/** Updates each of the subscribed functions with the published event
	 * @param  {validParams} event
	 * @returns void
	 */
	publish(event: validParams): void {
		this.eventSubscribers.forEach((fn) => fn(event));
	}
}
export { PubSub };
