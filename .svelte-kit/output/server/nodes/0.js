import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CAvl0UNA.js","_app/immutable/chunks/DEWLZVq4.js","_app/immutable/chunks/Bjof25eb.js","_app/immutable/chunks/DCiea4UI.js","_app/immutable/chunks/CvjdzADq.js","_app/immutable/chunks/D8yk0nqa.js","_app/immutable/chunks/DK4DKMfM.js","_app/immutable/chunks/DXkv3IPw.js"];
export const stylesheets = ["_app/immutable/assets/0.iog0TIOr.css"];
export const fonts = [];
