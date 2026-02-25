import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.BFvQ87BH.js","_app/immutable/chunks/DEWLZVq4.js","_app/immutable/chunks/Du6n-DR9.js","_app/immutable/chunks/DCiea4UI.js","_app/immutable/chunks/D8yk0nqa.js","_app/immutable/chunks/Bjof25eb.js","_app/immutable/chunks/CvjdzADq.js","_app/immutable/chunks/DK4DKMfM.js"];
export const stylesheets = [];
export const fonts = [];
