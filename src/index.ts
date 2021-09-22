/**
 * A type safe implementation of the observer pattern
 *
 * @template validParameters - the type of events this pubsub functions on
 */
class PubSub<validParameters> {
	private readonly _subscribers: Set<(argument: validParameters) => unknown> =
		new Set();

	/**
	 * Adds a function that accepts the pubsub parameters to the subscriber list
	 *
	 * @param subFunction - a subscriber to the event
	 * @returns unsubscribe function
	 */
	subscribe = (
		subFunction: (event: validParameters) => unknown
	): (() => void) => {
		this._subscribers.add(subFunction);
		return () => {
			this.unsubscribe(subFunction);
		};
	};

	/**
	 * Unsubscribes the given function from the pubsub
	 *
	 * @param subFunction -  a function that was subscribed to this pubsub
	 * @returns Deletion success status
	 */
	unsubscribe = (subFunction: (event: validParameters) => unknown): boolean =>
		this._subscribers.delete(subFunction);

	/**
	 * Updates each of the subscribed functions with the published event
	 *
	 * @param event - an update for the subscribers
	 */
	publish = (event: validParameters): void => {
		for (const function_ of this._subscribers) function_(event);
	};
}
export { PubSub };
