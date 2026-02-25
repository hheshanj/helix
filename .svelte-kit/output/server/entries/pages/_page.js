import { g as getPosts, a as getAllTags } from "../../chunks/posts.js";
async function load() {
  const posts = await getPosts();
  return {
    posts,
    allTags: getAllTags(posts)
  };
}
export {
  load
};
