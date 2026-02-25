import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CodLdRST.js","_app/immutable/chunks/D59KMfBb.js","_app/immutable/chunks/D0fslg4X.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/1cQuEGss.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CBrqxB05.js","_app/immutable/chunks/C7Y5xZEa.js"];
export const stylesheets = [];
export const fonts = [];
