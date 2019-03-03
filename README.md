<a href="https://www.npmjs.com/package/npx-wrap"><img src="https://img.shields.io/npm/v/npx-wrap.svg"></a>
<a href="https://www.npmjs.com/package/npx-wrap"><img src="https://img.shields.io/npm/dt/npx-wrap.svg"></a>

# npx-wrap
A tiny wrap around npx, which spawns the npx command.

Together with the power of npx you can run locally npm installed command line tools in a uniform fashion.
No need to install node modules globally!

It also easily integrates with node task runners (e.g.: npm and gulp) due to its promise interface.
## Install

```bash
$ npm install --save npx-wrap
```

## Usage

### imports
```js
// default import
import npx from 'npx-wrap'

// named import
import { npx } from 'npx-wrap';

// multiple named imports
import { async, spawn } from 'npx-wrap';
```
### async
```js
const args = [
    '-v'
];

await npx.async('tsc', args);
```

### spawn
```js
const args = [
    'Hello', 'World!'
];

const child = npx.spawn('echo', args);

child.on('exit', () { ... });
```
