import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CavEQVHq.js","_app/immutable/chunks/Du6n-DR9.js","_app/immutable/chunks/DEWLZVq4.js","_app/immutable/chunks/DCiea4UI.js","_app/immutable/chunks/Bjof25eb.js"];
export const stylesheets = [];
export const fonts = [];
