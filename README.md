# bmh-file

Read and write the original Windows BMHelper beta 4′ BMH format, including CP932 division names.
The package has no runtime dependencies. It accepts and returns Uint8Array values and works in browsers and Node.js.

## Install

```sh
npm install github:gumi-conqueror/bmh-file
```

Git installs build the TypeScript source with npm. Use Node.js 26.x for development.

## Use

```ts
import { readBmh, writeBmh } from '@gumi-conqueror/bmh-file';

const project = readBmh(bytes);
const saved = writeBmh(project, ({ original, exported }) => {
  console.warn(`Name converted: ${original} -> ${exported}`);
});
```

See [FORMAT.md](FORMAT.md) for the binary contract. Name conversion follows the original Windows behavior. The optional callback reports lossy conversion without changing the input project. MIDI grouping and recording-arrangement algorithms belong to the application.

## Develop

```sh
npm ci
npm test
npm pack
```

[MIT](LICENSE)
