# Asciiroth

Asciiroth is a powerful framework for effortlessly creating text-based games!

## Install

To install:

1. Clone the repository

2. run `npm i` or `npm install` to install project dependencies.

3. run `npm start`, this automatically watches for file changes.

4. run `npm run build` to compile your game to javascript.

## Basic Usage

```typescript
import { Game} from '@asciiroth/core';

const game = new Game('My Epic Game!');

const player = game.newPlayer('Homer Simpson');
```
