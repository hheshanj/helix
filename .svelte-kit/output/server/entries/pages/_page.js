import { g as getPosts } from "../../chunks/posts.js";
async function load() {
  const posts = await getPosts();
  return { posts };
}
export {
  load
};
