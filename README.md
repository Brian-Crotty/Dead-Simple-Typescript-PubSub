# Dead Simple Typescript PubSub

<!-- PROJECT LOGO -->
<img src="./logo.png" alt="logo" width="200"/>

<!-- Shields -->
![license-badge](https://img.shields.io/github/license/Brian-Crotty/Dead-Simple-Typescript-PubSub)
![last-update-badge](https://img.shields.io/github/last-commit/Brian-Crotty/Dead-Simple-Typescript-PubSub)
![size-badge](https://badgen.net/badgesize/brotli/Brian-Crotty/Dead-Simple-Typescript-PubSub/main/src/index.ts)
![dependency-count-badge](https://badgen.net/bundlephobia/dependency-count/dead-simple-pubsub)

- [Dead Simple Typescript PubSub](#dead-simple-typescript-pubsub)
  - [About the Project](#about-the-project)
  - [Install](#install)
    - [Package Manager](#package-manager)
    - [CDN](#cdn)
  - [Usage](#usage)
  - [Similar Tools](#similar-tools)
  - [License](#license)
  - [Contact](#contact)
  
## About the Project

A simple implementation of the Observer pattern with type safety! It's also dependency free and very light. The largest option in the distribution is the UMD package at **228 Bytes** after brotli, and the smallest is the modern ESM package at *jaw dropping* **143 Bytes** after brotli.

## Install

### Package Manager

#### NPM <!-- omit in TOC -->

```sh
npm i dead-simple-pubsub
```

#### PNPM <!-- omit in TOC -->

```sh
pnpm i dead-simple-pubsub
```

#### Yarn <!-- omit in TOC -->

```sh
yarn add dead-simple-pubsub
```

### CDN

#### Skypack <!-- omit in TOC -->

For Web and Deno, no install is required! Just put this line at the top of your file:

```typescript
import { PubSub } from 'https://cdn.skypack.dev/dead-simple-pubsub';
```

If you want type support with skypack, follow the directions [here]('https://docs.skypack.dev/skypack-cdn/code/javascript#using-skypack-urls-in-typescript')

#### UNPKG <!-- omit in TOC -->

```html
<script src="https://unpkg.com/dead-simple-pubsub"></script>
```

And use it like you would any other package from UNPKG

## Usage

Here's the great part. Unsurprisingly, the dead simple pubsub is really easy to use!
Thanks to [microbundle](https://github.com/developit/microbundle), this package supports CJS, UMD, and ESM formats.
That means that wherever and however you use this package — in browser or node, with import or require — you *should* be set, no configuration required.

### Example (Typescript) <!-- omit in TOC -->

```typescript
import { PubSub } from 'dead-simple-pubsub';

/** The pubsub must know the type of event it
 * will be used for when it is instantiated
 * ex. number or 'add'|'delete' */
const pubsub = new PubSub<number>();

/** This function takes a number and logs it to the console
 * @param {number} input the number to log to the console
 */
const namedLog = (input: number): void => {
  console.log(`named log: ${input}`);
};

// Add a named function to subscribers
pubsub.subscribe(namedLog);

// Publish with valid parameter
pubsub.publish(0);

/** Subscribing an anonymous function to the pubsub.
 * Subscribe returns a function that unsubscribes the input
 * so anonymous functions can be unsubscribed. */
const unsub = pubsub.subscribe((input: number) => {
  console.log(`anonymous log: ${input}`);
});

pubsub.publish(3);

// Unsubscribing a named function
pubsub.unsubscribe(namedLog);

pubsub.publish(5);

// Unsubscribing the anonymous function
unsub();

pubsub.publish(7);


/* result */
named log: 0
named log: 3
anonymous log: 3
anonymous log: 5
```

## Similar Tools

If this tool isn't working for you, try one of these:

- [mitt](https://github.com/developit/mitt)
- [event-emitter](https://github.com/medikoo/event-emitter#readme)
- [tiny-emitter](https://github.com/scottcorgan/tiny-emitter#readme)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Find me [@Brian-Crotty](https://github.com/Brian-Crotty) on github or [@illumincrotty](https://twitter.com/illumincrotty) on twitter
