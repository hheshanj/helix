import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CAnT5PmC.js","_app/immutable/chunks/BtMtoYAL.js","_app/immutable/chunks/C4Winbw8.js","_app/immutable/chunks/Dd-2ItXg.js","_app/immutable/chunks/Gb1Kp8MM.js"];
export const stylesheets = [];
export const fonts = [];
