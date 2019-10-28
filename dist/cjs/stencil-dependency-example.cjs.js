'use strict';

const core = require('./core-3da922b5.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
});
