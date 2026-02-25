import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CoW6vD2Y.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DrNNmNbn.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/1cQuEGss.js","_app/immutable/chunks/C7Y5xZEa.js","_app/immutable/chunks/CBrqxB05.js","_app/immutable/chunks/CcWRIunk.js","_app/immutable/chunks/CACxJjj5.js","_app/immutable/chunks/omllwana.js","_app/immutable/chunks/RN4EOp18.js"];
export const stylesheets = ["_app/immutable/assets/0.iog0TIOr.css"];
export const fonts = [];
