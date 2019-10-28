import { a as patchEsm, b as bootstrapLazy } from './core-333e9d23.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
  });
};

export { defineCustomElements };
