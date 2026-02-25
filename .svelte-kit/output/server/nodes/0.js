import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CuThgJ_r.js","_app/immutable/chunks/BtMtoYAL.js","_app/immutable/chunks/Dd-2ItXg.js","_app/immutable/chunks/Gb1Kp8MM.js","_app/immutable/chunks/CS5Wmju8.js","_app/immutable/entry/start.D9cNVTz-.js","_app/immutable/chunks/u9O7V38D.js","_app/immutable/chunks/Dv-8bcD8.js"];
export const stylesheets = ["_app/immutable/assets/0.JmBcx8MF.css"];
export const fonts = [];
