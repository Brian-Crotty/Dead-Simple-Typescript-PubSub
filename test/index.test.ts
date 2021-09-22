import test from 'ava';
import { PubSub } from '../src/index';

test('create pubsub, no error', (t) => {
	const ps = new PubSub();
	t.is(typeof ps, 'object');
});

test('can publish primitives', (t) => {
	t.plan(1);
	const pubsub = new PubSub<number>();
	const value = Math.random();
	const subscriber = (_input: number) => t.is(_input, value);
	pubsub.subscribe(subscriber);
	pubsub.publish(value);
});

test('can publish objects', (t) => {
	t.plan(1);
	type testType = { hello: 'world' };
	const pubsub = new PubSub<testType>();
	const value: testType = { hello: 'world' };
	const subscriber = (_input: testType) => t.is(_input, value);
	pubsub.subscribe(subscriber);
	pubsub.publish(value);
});

test('can unsubscribe with input function', (t) => {
	t.plan(1);
	const pubsub = new PubSub<number>();
	const value = Math.random();
	const subscriber = (_input: number) => t.is(_input, value);
	pubsub.subscribe(subscriber);
	pubsub.publish(value);
	pubsub.unsubscribe(subscriber);
	pubsub.publish(value);
});

test('can unsubscribe with returned function', (t) => {
	t.plan(1);
	const pubsub = new PubSub<number>();
	const value = Math.random();
	const subscriber = (_input: number) => t.is(_input, value);
	const unsub = pubsub.subscribe(subscriber);
	pubsub.publish(value);
	unsub();
	pubsub.publish(value);
});
