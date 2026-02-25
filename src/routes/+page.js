import { getPosts, getAllTags } from "$lib/posts.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const posts = await getPosts();
  return {
    posts,
    allTags: getAllTags(posts),
  };
}
