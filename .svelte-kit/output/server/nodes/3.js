import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.Dj2zeKQt.js","_app/immutable/chunks/BtMtoYAL.js","_app/immutable/chunks/C4Winbw8.js","_app/immutable/chunks/Dv-8bcD8.js","_app/immutable/chunks/Dd-2ItXg.js","_app/immutable/chunks/Gb1Kp8MM.js"];
export const stylesheets = [];
export const fonts = [];
