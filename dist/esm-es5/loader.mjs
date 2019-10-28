import { a as patchEsm, b as bootstrapLazy } from './core-333e9d23.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["my-component", [[1, "my-component"]]]], options);
    });
};
export { defineCustomElements };
