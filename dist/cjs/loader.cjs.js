'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3da922b5.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
