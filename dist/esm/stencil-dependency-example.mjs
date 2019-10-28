import { p as patchBrowser, b as bootstrapLazy } from './core-333e9d23.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});
